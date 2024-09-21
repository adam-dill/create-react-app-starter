import React from 'react';
import { markup } from '../App';
import { useApi } from '../data/ApiContext';

export default function About({setSectionHeader}) {
    const { about, isLoading, error } = useApi();

    if (isLoading || error || !about) return null;

    const { AboutText, ResumeSectionHeader } = about.attributes;
    setSectionHeader(ResumeSectionHeader);

    return <p dangerouslySetInnerHTML={{__html: markup(AboutText)}} />;
}
