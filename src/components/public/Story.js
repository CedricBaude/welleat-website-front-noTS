import React from 'react';
import './style.css';

const Story = () => {
    return (
        <section className='sub-content story' id=''>
            <h3 className='sub-title-2'>La story Welleat<span className='dot'>.</span></h3>
            <div className="story-content">
                <div className="story-content-content">
                    <div className="story-content-1">Septembre 2022</div>
                    <div className="story-content-2">Validation du produit Welleat<span className='dot'>.</span> en magasin</div>
                </div>

                <div className="story-content-content">
                    <div className="story-content-1">Mai à Aout 2022</div>
                    <div className="story-content-2">Développement des différents outils Welleat<span className='dot'>.</span></div>
                </div>

                <div className="story-content-content">
                    <div className="story-content-1">Avril 2022</div>
                    <div className="story-content-2">Test d'un pack avec les deux enseignes afin de valider que nos outils répondaient aux problématiques métiers</div>
                </div>

                <div className="story-content-content">
                    <div className="story-content-1">Octobre 2021</div>
                    <div className="story-content-2">Adaptation aux hypermarchés avec Leclerc, leader en part de marché France et son magasin pilote Atlantis </div>
                </div>

                <div className="story-content-content">
                    <div className="story-content-1">Février 2021</div>
                    <div className="story-content-2">Une solution co-construite avec Partisans du Goût, leader d'opinion</div>
                </div>


            </div>
        </section>
    );
};

export default Story;