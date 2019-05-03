import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary static-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary fixed-top">
                <a className="navbar-brand" href="/">Google Books</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Search</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/saved">Saved</a>
                    </li>
                </ul>
            </nav>
        </nav>
    )
        };
        
export default Nav;
