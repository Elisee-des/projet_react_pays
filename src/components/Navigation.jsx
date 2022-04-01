import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <div className='navigation'>
            <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <li>accueil</li>
            </NavLink>
            <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <li>A propos</li>
            </NavLink>
        </div>
    );
};

export default Navigation;