import React from 'react';
import './style.css';
import axios from "axios";
const baseURL = "https://testrender-6iwm.onrender.com/data";

const Simulation = () => {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {

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
                ca: 5000,
                marge: 200
            }
        )
            .then((res) => console.log("success", res))
            .catch((err) => {
                console.log(err.response);
            });

    };


    return (
        <section className='sub-content simulation' id="simulator">
            <h3 className='sub-title-2'>Simulation de gains<span className='dot'>.</span></h3>
            <form className='form-contact' onSubmit={postsimulation}>
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
                    <div><p className='p-sim'>Votre bénéfice serait de XXX.</p></div>
                </div>
                <p className='p-sim'>Avec Welleat<span className='dot'>.</span>, vous bénéficiez donc d’une augmentation de {post.data[1].valeur_manageable_data}% de votre CA et de {post.data[2].valeur_manageable_data}% de votre marge.</p>
                <div className='submit-button'>
                    <input type="submit" value="Envoyer" />
                </div>
            </form>
        </section>
    );
};

export default Simulation;