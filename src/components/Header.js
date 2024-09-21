import React from 'react';
import { useApi } from '../data/ApiContext';

export default function Header() {
    const { header, isLoading, error } = useApi();

    if (isLoading || error || !header) return null;

    const { Title, SubTitle, AllowResumeDownload, BackgroundImage} = header.attributes;
    const { url: backgroundImage, alternativeText } = BackgroundImage?.data?.attributes;

    return (
        <header>
            {backgroundImage && (
                <div className="hero">
                    <div className="tint" />
                    <img src={backgroundImage} alt={alternativeText ?? "hero background"} />
                </div>
            )}
            <div className="header-content">
                <div className="container d-flex flex-column">
                    {Title && <h2 className="text-uppercase">{Title}</h2>}
                    {SubTitle && <div className="sub-header">{SubTitle}</div>}
                    {AllowResumeDownload && <div>
                        <button className="btn btn-lg btn-outline-light mt-5">
                            Download Resume
                        </button>
                    </div>}
                </div>
            </div>
        </header>
    )
}
