import React from 'react';
import { getDateString } from '../App';
import { useApi } from '../data/ApiContext';

export default function Education({setSectionHeader}) {
    const { education, isLoading, error } = useApi();

    if (isLoading || error || !education) return null;

    const { EducationItems, ResumeSection } = education.attributes;
    setSectionHeader(ResumeSection);

    return (
        <ul className="display-list">
            {EducationItems?.map(item => {
                return (
                    <li key={item.id}>
                        <h3>{item.DegreeType} {item.DegreeName}</h3>
                        <p>{item.SchoolName} - {getDateString(item.CompletedDate)}</p>
                    </li>
                )
            })}
        </ul>
    )
}
