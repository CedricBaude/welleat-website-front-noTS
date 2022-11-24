import React from 'react';
import './appli.css';
import homeLogo from "../../assets/img/welleat-logo.png";
import axios from "axios";
const baseURL = "https://testrender-6iwm.onrender.com/data";


const Appli = () => {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            // console.log(response.data);
            setPost(response.data);
        });
    }, []);

    if (!post) return null;
    // console.log(post);
    // console.log(post.data[0].valeur_manageable_data);
    // console.log(post.data[0].valeur_manageable_data);
    return (


        <section className='appli' id='appli'>
            <div className="appli-left-content">
                <img src={homeLogo} alt="" className='home-logo' />
            </div>
            <div className="appli-right-content">
                <p><span className='fonter'>Welleat<span className='dot'>.</span></span> est une <span className='fonter'>solution de gestion des Métiers de bouche</span>  <br />
                    qui facilite la vie de plus de <span className='fonter'>{post.data[0].valeur_manageable_data} utilisateurs dans le monde.</span></p>
                <p><span className='fonter'>Acteurs de la Food</span>, optimisez votre production <br />
                    grâce à des outils dédiés et directement conçus <br />
                    pour vous faciliter la vie.</p>
                <p><span className='fonter'>Consommateurs</span>, bénéficiez d’une transparence totale <br />
                    sur la conception de vos produits frais favoris.</p>
            </div>

        </section>
    );
};

export default Appli;