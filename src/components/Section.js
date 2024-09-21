import React, {useState, cloneElement} from 'react';
import { useApi } from '../data/ApiContext';

export default function Section({ children }) {
    const { isLoading, error } = useApi();
    const [sectionHeader, setSectionHeader] = useState({})

    if (isLoading || error) return null;

    return (
        <section id={sectionHeader?.Title?.toLowerCase()}>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-lg-4">
                        <div className="d-flex flex-lg-column flex-row-reverse justify-content-end justify-content-lg-start">
                            <h2>{sectionHeader?.Title}</h2>
                            <i className={`${sectionHeader?.IconClass} title-icon`}></i>
                        </div>
                    </div>
                    <div className="col col-12 col-lg-8">
                        {cloneElement(children, {setSectionHeader})}
                    </div>
                </div>
            </div>
            
        </section>
    );
}