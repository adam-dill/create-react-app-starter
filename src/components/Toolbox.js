import React from 'react';
import { useApi } from '../data/ApiContext';

export default function Toolbox({setSectionHeader}) {
    const { toolbox, isLoading, error } = useApi();

    if (isLoading || error || !toolbox) return null;

    const { ListSections, ResumeSectionHeader } = toolbox.attributes;
    setSectionHeader(ResumeSectionHeader);

    return (
        <ul className="display-list">
            {ListSections?.map(section => {
                return (
                    <li key={section.id}>
                        <h3>{section.Title}</h3>
                        <ul>{section.ListItem?.map(item => <li key={item.id}>{item.ItemText}</li>)}</ul>
                    </li>
                )
            })}
        </ul>
    )
}
