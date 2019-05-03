import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <a className="navbar-brand text-white" href="/">Google Books</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/">Search</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/saved">Saved</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
        };
        
export default Nav;