import React, { useState } from 'react';
import './style.css';
import footerLogo from "../../assets/img/welleat-logo.png";
import footerLogoFont from "../../assets/img/welleat-logo-1.png";
import { Link } from 'react-router-dom';
import axios from 'axios';




const Footer = () => {
    const [nameNewsletter, SetNameNewsletter] = useState("");
    const [mailNewsletter, SetmailNewsletter] = useState("");
    function postnews(e) {
        e.preventDefault();
        console.log('fonction send envoyée');

        axios
            .post(
                "https://testrender-6iwm.onrender.com/newsletter",
                {
                    prenom: nameNewsletter,
                    email: mailNewsletter
                }
            )
            .then((res) => console.log("success", res))
            .catch((err) => {
                console.log(err.response);
            });
        alert("Votre demande d'adhésion à notre newsletter à bien été envoyée.");
        SetNameNewsletter("");
        SetmailNewsletter("");
    };

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
                            Suivez l’aventure <span className='welleat gras'>Welleat</span><span className='dot gras'>.</span> au travers de nos dernieres nouvelles.
                        </div>

                        <div className="footer-newsletter-content">
                            <form onSubmit={postnews} className="footer-newsletter-content">
                                <div className="footer-newsletter-input">
                                    <label htmlFor="">Prénom</label>
                                    <input type="text" onChange={e => SetNameNewsletter(e.target.value)} value={nameNewsletter} required />
                                </div>
                                <div className="footer-newsletter-input">
                                    <label htmlFor="">Adresse mail</label>
                                    <input type="email" onChange={e => SetmailNewsletter(e.target.value)} value={mailNewsletter} required />
                                </div>
                                <button type='submit' className='footer-newsletter-button'>Je m'inscris !</button>
                            </form>
                        </div>

                    </div>
                </div>
                <div className="footer-mentions">
                    <ul>
                        <li className='gras'>Welleat - 2022©</li>
                        <li className='gras'><Link to="/mentions">Mentions légales</Link></li>
                        <li className='gras'><Link to="/privacy">Confidentialité</Link></li>
                        <li className='gras'><Link to="/cookies">Cookies</Link></li>
                        <li className='gras'><Link to="/legal">Légal</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;