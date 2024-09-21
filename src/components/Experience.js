import React from 'react';
import { markup, getDateString } from '../App';

export default function Experience({data}) {
    return (
        <ul className="display-list-experience">
            {data.ExperienceList?.map(role => {
                const startDate = getDateString(role.StartDate);
                const endDate = getDateString(role.EndDate)
                const contracted = role.ContractedBy ? `, contracted by ${role.ContractedBy}` : null;

                return (
                    <li key={role.id}>
                        <h3 className='d-inline-block'>{role.CompanyName}</h3>
                        {contracted && <em>{contracted}</em>}
                        <p><strong>{role.PositionTitle}</strong> <em>- {startDate} to {endDate}</em></p>
                        {role.Responsibilities &&
                            <p dangerouslySetInnerHTML={{__html: markup(role.Responsibilities)}} />
                        }
                        {role.ResponsibilitiesList?.length !== 0 && 
                            <ul>
                                {role.ResponsibilitiesList.map(value => {
                                    return <li key={value.id}>{value.Text}</li>
                                })}
                            </ul>
                        }
                    </li>
                )
            })}
        </ul>
    )
}
