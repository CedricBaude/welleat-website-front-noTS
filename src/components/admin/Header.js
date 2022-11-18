import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { accountService } from '../../_services/account.service';
const Header = () => {
    let navigate = useNavigate();
    const logOut = () => {
        accountService.logOut();
        navigate('/');
    }
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
            <nav>
                <ul className='user-desc-ul'>
                    <li><Link to="/admin/dashboard">DASHBOARD</Link></li>
                    <li><Link to="/admin/review">AVIS UTILISATEURS</Link></li>
                    <li><Link to="/admin/contact">CONTACT</Link></li>
                    <li><Link to="/admin/simulation">SIMULATION DE GAINS</Link></li>
                    <li><Link to="/admin/newsletter">NEWSLETTER</Link></li>
                    <li><Link to="/admin/story">STORY</Link></li>
                </ul>
            </nav>
            <button className='logout' onClick={logOut}>DECONNEXION</button>
        </header>
    );
};

export default Header;