import React from 'react';
import { useApi } from '../data/ApiContext';

export default function Contact({setSectionHeader}) {
    const { contact, social, isLoading, error } = useApi();

    if (isLoading || error || !contact) return null;

    const { Phone, Email, ResumeSectionHeader } = contact.attributes;
    const { SocialMediaItems } = social.attributes;
    setSectionHeader(ResumeSectionHeader);

    return (
        <div className="d-flex flex-column">
            <a href={`mailto:${Email}`}>{Email}</a>
            <a href={`tel:${Phone}`}>{Phone}</a>
            <div className="mt-5">
                {SocialMediaItems?.map(item => (
                    <a key={item.id} href={`${item.Url}`} target="_blank" rel="noreferrer" className="mr-2">
                        <img src={item.Icon.data.attributes.url} className="social-media-icon" alt={item.Icon.data.attributes.alternativeText ?? "social media icon"} />
                    </a>
                ))}
            </div>
        </div>
    )
}
