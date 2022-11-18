import React from 'react';
import axios from "axios";

const baseURL = "https://testrender-6iwm.onrender.com/avis";
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
    console.log(post.data)
    return (
        <section className='sub-content use' id='returns'>
            <h3 className='sub-title-2'>Ils utilisent Welleat<span className='dot'>.</span> </h3>
            <div className='users-logo'>
                {
                    post?.data.map((data, index) => (
                        <div className="users-logo-picture" key={data.id}>
                            <img className='users-logo-picture-img' alt='' src={require('../../assets/img/' + post.data[index].photo_users_reviews + '')}>
                            </img>
                        </div>
                    ))

                }


                {/* <div className="users-logo-picture"><img></img> </div>
                <div className="users-logo-picture"><img src="../../assets/img/Photo_Test.png"></img></div>
                <div className="users-logo-picture"><img src="frontend\welleat-website-front-noTS\src\assets\img\Photo_Test.png"></img></div>
                <div className="users-logo-picture"></div> */}
            </div>
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