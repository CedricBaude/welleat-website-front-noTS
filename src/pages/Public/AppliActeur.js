import React from 'react';
import axios from "axios";
import chefLogo from './../../assets/img/logo/professions-man-chef-3.png';
import './style.css';

import Carousel from 'react-multi-carousel';
import CarouselLogo from './../../components/public/CarouselLogo';
import { responsive } from './../../components/public/CarouselData';

const baseURLLogo = "https://testrender-6iwm.onrender.com/logo";

const AppliActeur = () => {

    const [postLogo, setPostLogo] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURLLogo).then((response) => {
            // console.log(response.data);
            setPostLogo(response.data);
            console.log(response.data);
        });
    }, []);

    const carouselLogo = (postLogo?.data || []).map((data) => <CarouselLogo id_logo={data?.id} url={data?.lien} />);

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
                    <div className="logo-appli-acteur-carrousel-content">
                        <Carousel responsive={responsive} showDots={false} autoPlay={true} autoPlaySpeed={2000} infinite={true} arrows={false}>{carouselLogo}</Carousel>
                    </div>

                </div>
            </section>

            <section className='appli-acteur-content'>

                <h2 className='appli-acteur-title'>Ensemble promouvons la <br /> production culinaire</h2>
                <p>Produisons des produits sains pour vos clients et la planéte </p>

                <div>
                    <h3>Produisons des produits sains pour vos clients et la planéte </h3>
                </div>
            </section>

            <section className='appli-acteur-content'>
                <h2 className='appli-acteur-subtitle'>Structurer et digitaliser </h2>
            </section>

            <section className='appli-acteur-content'>
                <h2 className='appli-acteur-subtitle'>Optimiser / Anticiper / Adapter </h2>
            </section>

            <section className='appli-acteur-content'>
                <h2 className='appli-acteur-subtitle'>Partager et rasurrer </h2>
            </section>

        </div>
    );
};

export default AppliActeur;