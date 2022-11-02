import React from 'react';
import './style.css';

const Simulation = () => {
    return (
        <section className='sub-content simulation' id="simulator">
            <h3 className='sub-title-2'>Simulation de gains.</h3>
            <div className='sim-content'>
                <div className="sim-content-1">
                    <div className="sim-input">
                        <p className='p-input-1'>Votre CA</p><input type="text" className='input-1' />
                    </div>
                    <div className="sim-input">
                        <p className='p-input-2'>Votre CA avec Welleat<span className='dot'>.</span></p><input type="text" className='input-1' />
                    </div>

                </div>
                <div className="sim-content-2">
                    <div className="sim-input">
                        <p className='p-input-1'>Votre marge</p><input type="text" className='input-1' />
                    </div>
                    <div className="sim-input">
                        <p className='p-input-2'>Votre marge avec Welleat<span className='dot'>.</span></p><input type="text" className='input-1' />
                    </div>
                </div>

            </div>
            <p className='p-sim'>Avec Welleat<span className='dot'>.</span>, vous bénéficiez donc d’une augmentation de XX% de votre CA et de XX% de votre marge.</p>
        </section>
    );
};

export default Simulation;