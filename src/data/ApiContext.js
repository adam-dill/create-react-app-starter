import React, { createContext, useState, useEffect } from 'react';
import MockData from './mockdata';

const ApiContext = createContext();

// Endpoint definitions
const Endpoints = {
    HEADER: 'https://strapi-production-c51f.up.railway.app/api/header?populate=*',
    ABOUT: 'https://strapi-production-c51f.up.railway.app/api/about?populate=*',
    CONTACT: 'https://strapi-production-c51f.up.railway.app/api/contact?populate=*',
    EDUCATION: 'https://strapi-production-c51f.up.railway.app/api/education?populate=*',
    SOCIAL: 'https://strapi-production-c51f.up.railway.app/api/social?populate[ResumeSectionHeader][populate]=*&populate[SocialMediaItems][populate]=*',
    TOOLBOX: 'https://strapi-production-c51f.up.railway.app/api/toolbox?populate[ResumeSectionHeader][populate]=*&populate[ListSections][populate]=*'
};

const fetchData = async (key) => {
    if (process.env.NODE_ENV === 'development') {
        return Promise.resolve(JSON.parse(MockData[key]));
    }
    const response = await fetch(Endpoints[key]);
    if (!response.ok) {
        throw new Error(`Failed to fetch data from ${key}, status: ${response.status}`);
    }
    return await response.json();
};

// Provider component
export const ApiProvider = ({ children }) => {
    const [data, setData] = useState({
        header: null,
        about: null,
        contact: null,
        education: null,
        social: null,
        toolbox: null,
        isLoading: true,
        error: null
    });

    useEffect(() => {
        // Fetch all data concurrently
        const fetchAllData = async () => {
            try {
                const [header, about, contact, education, social, toolbox] = await Promise.all([
                    fetchData('HEADER'),
                    fetchData('ABOUT'),
                    fetchData('CONTACT'),
                    fetchData('EDUCATION'),
                    fetchData('SOCIAL'),
                    fetchData('TOOLBOX')
                ]);

                setData({
                    header: header.data,
                    about: about.data,
                    contact: contact.data,
                    education: education.data,
                    social: social.data,
                    toolbox: toolbox.data,
                    isLoading: false,
                    error: null
                });
            } catch (error) {
                setData(d => {
                    return { ...d, isLoading: false, error: error.message }
                });
            }
        };

        fetchAllData();
    }, []);

    return (
        <ApiContext.Provider value={data}>
            {children}
        </ApiContext.Provider>
    );
};

export const useApi = () => {
    const context = React.useContext(ApiContext);
    if (context === undefined) {
        throw new Error('useApi must be used within an ApiProvider');
    }
    return context;
};