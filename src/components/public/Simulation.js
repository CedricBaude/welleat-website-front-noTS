import React, { useState, useLayoutEffect } from 'react';
import './style.css';
import axios from "axios";
const baseURL = "https://testrender-6iwm.onrender.com/data";

const Simulation = () => {
    const [post, setPost] = useState(null);
    const [inputCA, SetInputCA] = useState("");
    const [inputMarge, SetInputMarge] = useState("");
    const [reponse, setReponse] = useState("");

    useLayoutEffect(() => {
        axios.get(baseURL).then((response) => {
            // console.log(response.data);
            setPost(response.data);
        });
    }, []);

    if (!post) return null;
    // console.log(post);
    //  console.log(post.data[1].valeur_manageable_data);
    // console.log(post.data[0].valeur_manageable_data);

    function postsimulation(e) {
        e.preventDefault();
        console.log('fonction send envoyée');

        axios.post("https://testrender-6iwm.onrender.com/earning_simulator",
            {
                ca: inputCA,
                marge: inputMarge
            }
        )
            .then((res) => {
                return (
                    setReponse(res)
                )
            }
            )



            .catch((err) => {
                console.log(err.response);
            });

    };

    return (
        <section className='sub-content simulation' id="simulator">
            <h3 className='sub-title-2'>Simulation de gains<span className='dot'>.</span></h3>
            <form className='sim-content' onSubmit={postsimulation}>
                <div className="sim-content-1">
                    <div className="sim-input">
                        <p className='p-input-1'>Votre CA</p>
                        <input type="text" className='input-1' onChange={e => SetInputCA(e.target.value)} value={inputCA} />
                    </div>
                    <div className="sim-input">
                        <p className='p-input-2'>Votre CA avec Welleat<span className='dot'>.</span></p><input type="text" className='input-1' value={reponse?.data?.data?.CA_avec_WellEat || ""} readOnly />
                    </div>
                </div>
                <div>

                </div>
                <div className="sim-content-2">
                    <div className="sim-input">
                        <p className='p-input-1'>Votre marge</p>
                        <input type="text" className='input-1' onChange={e => SetInputMarge(e.target.value)} value={inputMarge} />
                    </div>
                    <div className="sim-input">
                        <p className='p-input-2'>Votre marge avec Welleat<span className='dot'>.</span></p>
                        <input type="text" className='input-1' value={reponse?.data?.data?.marge_avec_WellEat || ""} readOnly />
                    </div>
                </div>
                <div><p className='p-sim'>Votre bénéfice serait potentiellement de {reponse?.data?.data?.benefice_avec_WellEat || ""}</p></div>
                <div className='submit-button' >
                    <button type="submit">Envoyer</button>
                </div>
            </form>
            <p className='p-sim'>Avec Welleat<span className='dot'>.</span>, vous bénéficiez donc d’une augmentation de {post.data[1].valeur_manageable_data}% de votre CA et de {post.data[2].valeur_manageable_data}% de votre marge.</p>
        </section>
    );
};

export default Simulation;