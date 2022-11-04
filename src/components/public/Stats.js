import React from 'react';
import './style.css';

const Stats = () => {
    return (
        <section className='sub-content stats' id='numbers'>
            <h3 className='sub-title-2'>Nos chiffres<span className='dot'>.</span></h3>
            <div className="stat-number-content">
                <div className="stat-number">
                    <p className='pourcent'>30%</p>
                    <p className="stat-number-para">d'augmentation de chiffre d'affaire des métier de bouche</p>
                </div>


                <div className="stat-number">
                    <p className='pourcent'>47%</p>
                    <p className="stat-number-para">de diminution de la casse</p>
                </div>


                <div className="stat-number">
                    <p className='pourcent'>89%</p>
                    <p className="stat-number-para">de diminution des ruptures produit</p>
                </div>


                <div className="stat-number">
                    <p className='pourcent'>2,1%</p>
                    <p className="stat-number-para">d'augmentation du chiffre d'affaire global magasin</p>
                </div>


            </div>
        </section>
    );
};

export default Stats;