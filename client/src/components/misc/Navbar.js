import React, {useState} from 'react';

import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(true);
 
    return(
        <div className="top">
            <div className="navbar" style={{letterSpacing:4}}>
                {/* home link on the left of the navbar */}
                <Link to="/" className="home-link">Gourmet au Catering</Link>
                {/* button on the right of the navbar */}
                <button className="toggle-button" onClick={() => setNavOpen(!navOpen)}> 
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                {/* links on the right of the navbar */}
                <div className="right-item-buttons" id={navOpen ? "hidden" : ""}>
                    <Link to="/about" className="item">About</Link>
                    <Link to="/menu" className="item">Menu</Link>
                    <Link to="/contact" className="item">Contact</Link>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;