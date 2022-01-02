import React, {Component} from 'react';


    // Stateless Functional component
    const NavBar = (props) => {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Navbar
                        <span className="badge bg-pill bg-secondary">{props.totalCounters}</span>
                    </a>
                </div>
            </nav>
        );
    }

export default NavBar;