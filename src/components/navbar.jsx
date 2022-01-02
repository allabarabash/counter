import React, {Component} from 'react';


    // Stateless Functional component
    const NavBar = ({totalCounters}) => {
        console.log('Navbar - Rendered');
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Navbar
                        <span className="badge bg-pill bg-secondary">{totalCounters}</span>
                    </a>
                </div>
            </nav>
        );
    }

export default NavBar;