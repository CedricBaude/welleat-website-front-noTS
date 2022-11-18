import React from 'react';
import './style.css';
import axios from "axios";
const baseURL = "http://https://testrender-6iwm.onrender.com/data";

const Stats = () => {
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
    return (
        <section className='sub-content stats' id='numbers'>
            <h3 className='sub-title-2'>Nos chiffres<span className='dot'>.</span></h3>
            <div className="stat-number-content">
                <div className="stat-number">
                    <p className='pourcent'>{post.data[3].valeur_manageable_data}%</p>
                    <p className="stat-number-para">d'augmentation de chiffre d'affaire des métier de bouche</p>
                </div>


                <div className="stat-number">
                    <p className='pourcent'>{post.data[4].valeur_manageable_data}%</p>
                    <p className="stat-number-para">de diminution de la casse</p>
                </div>


                <div className="stat-number">
                    <p className='pourcent'>{post.data[5].valeur_manageable_data}%</p>
                    <p className="stat-number-para">de diminution des ruptures produit</p>
                </div>


                <div className="stat-number">
                    <p className='pourcent'>{post.data[6].valeur_manageable_data}%</p>
                    <p className="stat-number-para">d'augmentation du chiffre d'affaire global magasin</p>
                </div>


            </div>
        </section>
    );
};

export default Stats;