import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './header.css';

const HeaderMentions = () => {
    return (
        <header className="header" >
            <nav className="navbar">
                <div className="home">
                    {/* <img src={homeLogoSmall} alt="" className='home-logo-small' /> */}
                    <HashLink smooth to="/#home"><div className="home-logo-small"></div></HashLink>
                </div>
                <ul>
                    {/* <li><HashLink smooth to="/home"></Link></li> */}
                    <li><HashLink smooth to="/#appli">L'application</HashLink></li>
                    <li><HashLink smooth to="/#numbers">Nos chiffres</HashLink></li>
                    <li><HashLink smooth to="/#simulator">Simulateur</HashLink></li>
                    <li><HashLink smooth to="/#returns">Retours clients</HashLink></li>
                    <li><HashLink smooth to="/#contact">Contact</HashLink></li>



                    {/* <li><Link to="/numbers">Nos chiffres</Link></li>
                    <li><Link to="/simulator">Simulateur</Link></li>
                    <li><Link to="/returns">Retours clients</Link></li>
                    <li><Link to="/contact">Contact</Link></li> */}

                </ul>
            </nav>
        </header>

    );
};

export default HeaderMentions;