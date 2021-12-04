import React from 'react';

import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {

    const toggleButtonHandler = () => {
        console.log('wired');
    };
 
    return(
        <div className="top">
        <div className="navbar padding card" style={{letterSpacing:4}}>
            <Link to="/" className="item button">Gourmet au Catering</Link>
            <Link to="#" className="toggle-button" onClick={toggleButtonHandler}>
                {/* https://ibaslogic.com/how-to-add-hamburger-menu-in-react/ */}
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </Link>
            {/* links on the right of the navbar */}
            <div className="right-item-button">
                <Link to="/about" className="item button">About</Link>
                <Link to="/menu" className="item button">Menu</Link>
                <Link to="/contact" className="item button">Contact</Link>
            </div>
        </div>
        </div>
    );
};

export default Navbar;