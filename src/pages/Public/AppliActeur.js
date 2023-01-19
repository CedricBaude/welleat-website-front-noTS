import React from 'react';
import chefLogo from './../../assets/img/logo/professions-man-chef-3.png';
import './style.css';

const AppliActeur = () => {
    return (
        <div className='appli-acteur'>

            <section className='header-appli-acteur'>
                <div className='logo-appli-acteur'>
                    <img className='chefLogo' src={chefLogo} alt="" />
                </div>
                <div>
                    <h2>Nos outils pour les acteurs <br /> de la food </h2>
                </div>
                <div>
                    <h3>“Adapter la méthode industrielle à une production de plus petite échelle en la rendant
                        <br /> plus humaine et plus saine, tout en ne produisant que ce vous allez vendre !”</h3>
                </div>
                <div>
                    <h4>900 000 employés utilisent Welleat au quotidien</h4>
                </div>

            </section >

            <section className='appli-acteur-content'>
                <div className="logo-appli-acteur-carrousel">

                </div>
            </section>

            <section>
                <div>
                    <h2 className='appli-acteur-title'>Ensemble promouvons la <br /> production culinaire</h2>
                </div>
                <div>
                    <h3>Produisons des produits sains pour vos clients et la planéte </h3>
                </div>
            </section>

            <section>
                <h2 className='appli-acteur-title'>Structurer et digitaliser </h2>
            </section>

            <section>
                <h2 className='appli-acteur-title'>Optimiser / Anticiper / Adapter </h2>
            </section>

            <section>
                <h2 className='appli-acteur-title'>Partager et rasurrer </h2>
            </section>

        </div>
    );
};

export default AppliActeur;