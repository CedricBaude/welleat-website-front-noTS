import React from 'react';
import axios from "axios";

const baseURL = "http://localhost:5000/avis";
const Use = () => {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            // console.log(response.data);
            setPost(response.data);
        });
    }, []);

    if (!post) return null;
    console.log(post.data[0].photo_users_reviews);
    //  console.log(post);
    //  console.log(post.data[0].commentaire_users_reviews);
    // console.log(post.data[0].valeur_manageable_data);
    return (
        <section className='sub-content use' id='returns'>
            <h3 className='sub-title-2'>Ils utilisent Welleat<span className='dot'>.</span> </h3>
            <div className='users-logo'>
                <div className="users-logo-picture"><img src={post.data[0].photo_users_reviews} alt=""></img></div>
                <div className="users-logo-picture"><img src="" alt=""></img> </div>
                <div className="users-logo-picture"><img src="../../assets/img/Photo_Test.png" alt=""></img></div>
                <div className="users-logo-picture"><img src="frontend\welleat-website-front-noTS\src\assets\img\Photo_Test.png" alt=""></img></div>
                <div className="users-logo-picture"></div>
            </div>
            <div className="users-testi">
                <div className="users-profil">
                    <div className="profil-picture"></div>
                    <p>{post.data[0].commentaire_users_reviews}</p>
                </div>
                <div className="users-profil">
                    <div className="profil-picture"></div>
                    <p>{post.data[1].commentaire_users_reviews}</p>
                </div>
                <div className="users-profil">
                    <div className="profil-picture"></div>
                    <p>{post.data[2].commentaire_users_reviews}</p>

                </div>
            </div>
        </section>
    );
};

export default Use;