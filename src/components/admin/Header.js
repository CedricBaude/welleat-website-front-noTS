import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { accountService } from '../../_services/account.service';

const Header = () => {
    let navigate = useNavigate();
    const logOut = () => {
        accountService.logOut();
        navigate('/');
    }
    let activeStyle = {
        backgroundColor: "#FFC959",
    };
    return (
        <header className='header-dashboard'>
            <div className="user-desc">
                <div className="user-initials">
                    GD
                </div>
                <div className="user-name">
                    GAUTIER DECROIX <br />
                    <span className='ita'>Manager</span>
                </div>
            </div>
            <div className="header-nav">
                <nav>
                    <ul className='user-desc-ul'>
                        <li><NavLink to="/admin/dashboard" style={({ isActive }) => isActive ? activeStyle : undefined}>DASHBOARD</NavLink></li>
                        <li><NavLink to="/admin/review" style={({ isActive }) => isActive ? activeStyle : undefined}>AVIS UTILISATEURS</NavLink></li>
                        <li><NavLink to="/admin/contact" style={({ isActive }) => isActive ? activeStyle : undefined}>CONTACT</NavLink></li>
                        <li><NavLink to="/admin/simulation" style={({ isActive }) => isActive ? activeStyle : undefined}>SIMULATION DE GAINS</NavLink></li>
                        <li><NavLink to="/admin/newsletter" style={({ isActive }) => isActive ? activeStyle : undefined}>NEWSLETTER</NavLink></li>
                        <li><NavLink to="/admin/story" style={({ isActive }) => isActive ? activeStyle : undefined}>STORY</NavLink></li>
                        <li><NavLink to="/admin/media" style={({ isActive }) => isActive ? activeStyle : undefined}>MEDIA</NavLink></li>
                    </ul>
                </nav>
                <div className="logOutButton">
                    <button className='logout' onClick={logOut}>DECONNEXION</button>
                </div>

            </div>

        </header>
    );
};

export default Header;