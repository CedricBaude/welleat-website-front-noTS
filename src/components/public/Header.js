import React, { useState } from 'react';
import './header.css';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const [navBar, setNavBar] = useState(false);

    const changeBackGround = () => {
        if (window.scrollY >= 80) {
            setNavBar(true)
        }
        else {
            setNavBar(false)
        }
    };
    window.addEventListener('scroll', changeBackGround);

    return (
        <header className="header" >
            <nav className={navBar ? 'navbar active' : 'navbar'}>
                <div className="home">
                    {/* <img src={homeLogoSmall} alt="" className='home-logo-small' /> */}
                    <HashLink smooth to="/#home"><div className="home-logo-small"></div></HashLink>
                </div>
                <ul>
                    {/* <li><HashLink smooth to="/home"></Link></li> */}
                    <li><HashLink smooth to="/#appli" id='test'>L'application</HashLink></li>
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

export default Header;