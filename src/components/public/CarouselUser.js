import React from 'react';

const CarouselUser = (props) => {
    return (
        <div className="users-testi">
            <div className="users-profil" key={props.id_user_review}>
                <div className="profil-picture">
                    <img className='users-picture' alt='' src={require('../../assets/img/' + props.url_user_review + '')} />
                </div>
                <div className='users-name'>{props.prenom_users_reviews}</div>
                <div className='users-job'>{props.poste_users_reviews}</div>
                <div className='users-comment'>{props.commentaire_users_reviews}</div>
            </div>
        </div>
    );
};

export default CarouselUser;