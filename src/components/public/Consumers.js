import React from 'react';
import videoTemp from "../../assets/img/video-temp.png";

const Consumers = () => {
    return (
        <section className='sub-content distribution' id="">
            <h3>CONSOMMATEURS</h3>
            <div className="verticale-line-distrib-2"></div>
            <div className="distribution-content">
                <div className="distribution-subcontent">
                    <div className="distribution-media">
                        <img src={videoTemp} alt="" className='' />
                    </div>
                </div>
                <div className="distribution-subcontent">
                    <h4>TRANSPARENCE D'ACHAT</h4>
                    <ul>
                        <li>SUIVI DU PROCESSUS DE FABRICATION</li>
                        <li>TRANSPARENCE SUR LA TRACABILITE</li>
                        <li>ORIGINE DES MATIERES PREMIERES</li>
                        <li>GARANTIE DE SECURITE ALIMENTAIRE</li>
                    </ul>

                </div>

            </div>
            <div className="distribution-content">
                <div className="distribution-subcontent">
                    <h4>L'APPLICATION CONSOMMATEUR</h4>
                    <ul>
                        <li>SYSTEME POUR VOIR LE WELLEAT SCORE DU PRODUIT</li>
                        <li>SYSTEME D'AVIS ET NOTATION DU PRODUIT</li>
                        <li>COMMANDER FACILEMENT VOS PRODUIT FRAIS DU JOUR</li>
                        <li>INFORMATION SUR LES PRODUITS FRAIS DE VOTRE MAGAZIN</li>
                        <li>SIMPLIFICATION DU SYSTEME DE CONSIGNE</li>
                        <li>SUIVIE DE L'IMPACT DE L'ALIMENTATION DE L'UTILISATEUR SUR SA SANTE ET L'ENVIRONNEMENT</li>
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

export default Consumers;