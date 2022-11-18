import React from 'react';
import './style.css';
import footerLogo from "../../assets/img/welleat-logo.png";
import footerLogoFont from "../../assets/img/welleat-logo-1.png";
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-content">
                <div className="footer-quote">
                    <q>Révolutions la production culinaire pour rendre accessible le bien manger à tous.</q>
                </div>
                <div className="footer-content-content">
                    <div className="footer-logo">
                        <div className='footerLogo'>
                            <img src={footerLogo} alt="" className='footerLogoImg' />
                        </div>
                        <div className='footerLogoFont'>
                            <img src={footerLogoFont} alt="" className='footerLogoFontImg' />
                        </div>

                    </div>
                    <div className="footer-newsletter">
                        <div className="footer-newsletter-desc">
                            Suivez l’aventure <span className='welleat'>Welleat</span><span className='dot'>.</span> au travers de nos dernieres nouvelles.
                        </div>

                        <div className="footer-newsletter-content">
                            <form action="" className="footer-newsletter-content">
                                <div className="footer-newsletter-input">
                                    <label htmlFor="">Prénom</label>
                                    <input type="text" />
                                </div>
                                <div className="footer-newsletter-input">
                                    <label htmlFor="">Adresse mail</label>
                                    <input type="text" />
                                </div>
                                <button className='footer-newsletter-button'>Je m'inscris !</button>
                            </form>
                        </div>

                    </div>
                </div>
                <div className="footer-mentions">
                    <ul>
                        <li>Welleat - 2022©</li>
                        <li><Link to="/mentions">Mentions légales</Link></li>
                        <li><Link to="/privacy">Confidentialité</Link></li>
                        <li><Link to="/cookies">Cookies</Link></li>
                        <li><Link to="/legal">Légal</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;