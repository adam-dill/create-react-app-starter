import React from "react";

export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 fixed-top">
            <h1 className="navbar-brand ml-3" href="#">
                <span className="aqua">Adam</span>Dill
            </h1>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <a href="#about" className="nav-link">
                            About
                        </a>
                    </li>
                    <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <a href="#experience" className="nav-link">
                            Experience
                        </a>
                    </li>
                    <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <a href="#toolbox" className="nav-link">
                            Toolbox
                        </a>
                    </li>
                    <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <a href="#education" className="nav-link">
                            Education
                        </a>
                    </li>
                    <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <a href="#contact" className="nav-link">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
