import React from 'react';
import axios from "axios";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import CarouselLogo from './CarouselLogo';
import CarouselUser from './CarouselUser';

import { responsive } from './CarouselData';

const baseURL = "https://testrender-6iwm.onrender.com/avis";
const baseURLLogo = "https://testrender-6iwm.onrender.com/logo";
const Use = () => {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            // console.log(response.data);
            setPost(response.data);
        });
    }, []);

    const [postLogo, setPostLogo] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURLLogo).then((response) => {
            // console.log(response.data);
            setPostLogo(response.data);
            console.log(response.data);
        });
    }, []);

    if (!post) return null;
    const carouselLogo = (postLogo?.data || []).map((data) => <CarouselLogo id_logo={data?.id} url={data?.lien} />);
    const carouselUser = (post?.data || []).map((data, index) => <CarouselUser id_user_review={data?.id} url_user_review={data?.photo_users_reviews} prenom_users_reviews={data?.prenom_users_reviews} poste_users_reviews={data?.poste_users_reviews} commentaire_users_reviews={data?.commentaire_users_reviews} />);

    return (
        <section className='sub-content use' id='returns'>
            <h3 className='sub-title-2'>Ils utilisent Welleat<span className='dot'>.</span> </h3>
            <div className="users-logo-container">
                <Carousel responsive={responsive} showDots={false} autoPlay={true} autoPlaySpeed={2000} infinite={true} arrows={false}>{carouselLogo}</Carousel>
            </div>

            {/* {product2} */}
            <div className="users-testi-container">
                <Carousel responsive={responsive} showDots={false} autoPlay={false} autoPlaySpeed={2000} infinite={true} arrows={true}>{carouselUser}</Carousel>
            </div>


        </section>
    );
};

export default Use;