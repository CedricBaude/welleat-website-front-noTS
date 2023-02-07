import React from 'react';
import axios from "axios";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import CarouselLogo from './CarouselLogo';

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
    // const product = productData.map((item) => <Product name={item.name} url={item.imageurl} price={item.price} description={item.description} />);
    // const product2 = postLogo?.data.map((data) => <Product2 id_prod={data?.id} url={data?.lien} />);
    const carouselLogo = (postLogo?.data || []).map((data) => <CarouselLogo id_logo={data?.id} url={data?.lien} />);

    return (
        <section className='sub-content use' id='returns'>
            <h3 className='sub-title-2'>Ils utilisent Welleat<span className='dot'>.</span> </h3>


            {/* {
                    postLogo?.data.map((data, index) => (
                        <div className="users-logo-picture" key={data.id}>
                            <img className='users-logo-picture-img' alt='' src={require('../../assets/img/' + postLogo.data[index].lien + '')}>
                            </img>
                        </div>
                    ))
                } */}


            {/* <div className="users-logo-picture"><img></img> </div>
                <div className="users-logo-picture"><img src="../../assets/img/Photo_Test.png"></img></div>
                <div className="users-logo-picture"><img src="frontend\welleat-website-front-noTS\src\assets\img\Photo_Test.png"></img></div>
                <div className="users-logo-picture"></div> */}
            <div className="users-logo-container">
                <Carousel responsive={responsive} showDots={false} autoPlay={true} autoPlaySpeed={2000} infinite={true} arrows={false}>{carouselLogo}</Carousel>
                {/* <Carousel responsive={responsive} showDots={true} autoPlay={true} autoPlaySpeed={2000} infinite={true}>{product2}</Carousel> */}
            </div>

            {/* {product2} */}
            <div className="users-testi">

                {
                    post?.data.map((data, index) => (
                        <div className="users-profil" key={data.id}>
                            <div className="profil-picture">
                                <img className='users-picture' alt='' src={require('../../assets/img/' + post.data[index].photo_users_reviews + '')}>
                                </img>
                            </div>
                            <div className='users-name'>{post.data[index].prenom_users_reviews}</div>
                            <div className='users-job'>{post.data[index].poste_users_reviews}</div>
                            <div className='users-comment'>{post.data[index].commentaire_users_reviews}</div>


                        </div>
                    ))

                }
            </div>
        </section>
    );
};

export default Use;