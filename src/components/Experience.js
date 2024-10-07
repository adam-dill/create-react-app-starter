import React from 'react';
import { getDateString } from '../App';
import { useApi } from '../data/ApiContext';

export default function Experience({setSectionHeader}) {
    const { experience, isLoading, error } = useApi();
    if (isLoading || error || !experience) return null;

    const { ExperienceEntries, ResumeSectionHeader } = experience.attributes;
    setSectionHeader(ResumeSectionHeader);

    return (
        <ul className="display-list-experience">
            {ExperienceEntries.map(role => {
                const startDate = getDateString(role.StartDate);
                const endDate = getDateString(role.EndDate)
                const contracted = role.SubcontractName ? `, contracted by ${role.SubcontractName}` : null;

                return (
                    <li key={role.id}>
                        <h3 className='d-inline-block'>{role.CompanyName}</h3>
                        {contracted && <em>{contracted}</em>}
                        <p><strong>{role.PositionTitle}</strong> <em>- {startDate} to {endDate}</em></p>
                        {role.ExperienceTask?.length !== 0 && 
                            <ul>
                                {role.ExperienceTask.map(value => {
                                    return <li key={value.id}>{value.ExperienceTask}</li>
                                })}
                            </ul>
                        }
                    </li>
                )
            })}
        </ul>
    )
}
