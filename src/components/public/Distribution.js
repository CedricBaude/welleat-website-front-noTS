import React from 'react';
import './style.css';
import videoTemp from "../../assets/img/video-temp.png";

const Distribution = () => {
    return (
        <section className='sub-content distribution distrib-margin' id="">
            <h3>GRANDES DISTRIBUTIONS, CANTINES, CHAINES DE RESTAURATIONS</h3>
            <div className="verticale-line-distrib-1"></div>
            <div className="distribution-content">
                <div className="distribution-subcontent">
                    <div className="distribution-media">
                        <img src={videoTemp} alt="" className='' />
                    </div>
                </div>
                <div className="distribution-subcontent">
                    <h4>DIGITALISER ET AUTOMATISER</h4>
                    <ul>
                        <li>PROCESSUS DE FABRICATION</li>
                        <li>PRODUCTION</li>
                        <li>TRACABILITE</li>
                        <li>STOCK</li>
                        <li>SUIVI D'ACTIVITE</li>
                    </ul>
                </div>
            </div>

            <div className="distribution-content">
                <div className="distribution-subcontent">
                    <h4>INTELLIGENCE ARTIFICIELLE ET BUSSINESS INTELLIGENCE</h4>
                    <ul>
                        <li>PREDICTION & OPTIMISATION DES QUANTITES DE PRODUCTION</li>
                        <li>PREDICTION DU BESOIN EN PERSONNEL</li>
                        <li>PREDICTION DU BESOIN EN MATIERE PREMIERE ET CONDITIONNEMENT</li>
                        <li>SPROPOSITION DE COMMANDE</li>
                        <li>AIDE A LA DECISION (PRIX DE VENTE, ASSORTIMENT PRODUIT,..)</li>
                    </ul>
                </div>
                <div className="distribution-subcontent">
                    <div className="distribution-media">
                        <img src={videoTemp} alt="" className='' />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Distribution;