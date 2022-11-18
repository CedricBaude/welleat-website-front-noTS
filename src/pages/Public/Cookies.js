import React from 'react';
import Footer from '../../components/public/Footer';
import HeaderMentions from '../../components/public/HeaderMentions';
import './style.css';

const Cookies = () => {
    return (
        <div className="mentions-container">
            <HeaderMentions />

            <div className='mentions-content'>
                <h2>CONFIDENTIALITE</h2><br /><br />
                <p>
                    Ce site est édité par: <br /><br />

                    Pour les personnes physiques :<br /><br />

                    Nom<br />
                    Prénoms<br />
                    Domicile<br />
                    Numéro de téléphone<br />
                    Le cas échéant : numéro d’inscription au registre du commerce et des sociétés (RCS) ou au répertoire des métiers (RM).<br />
                    Pour les personnes morales :<br /><br />

                    Dénomination ou raison sociale.<br />
                    Siège social.<br />
                    Numéro de téléphone.<br />
                    Le cas échéant : numéro d’inscription au registre du commerce et des sociétés (RCS) ou au répertoire des métiers (RM).<br />
                    Capital social.<br />
                    Adresse du siège social.<br />
                    Nom du directeur ou du codirecteur de la publication.<br /><br />

                    Le cas échéant : nom du responsable de la rédaction.<br /><br />

                    Ce site est hébergé par :<br /><br />

                    Nom<br />
                    Dénomination ou raison sociale.<br />
                    Adresse.<br />
                    Numéro de téléphone.<br />
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default Cookies;