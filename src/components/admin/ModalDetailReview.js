import React from 'react';
import './modalContact.css';

const modalContainerActive = 'modalContainerActive';
const modalContainer = 'modalContainer';



const ModalDetailReview = (props) => {

    const modalState = props.toggle;
    const close = props.action;
    const usersData = props.userReview;
    let nom, magazin, poste, photo, commentaire, pin;
    if (props.userReview) {
        nom = props.userReview.prenom_users_reviews;
        magazin = props.userReview.magasin_enseigne_users_reviews;
        poste = props.userReview.poste_users_reviews;
        commentaire = props.userReview.commentaire_users_reviews;
        photo = props.userReview.photo_users_reviews;
        pin = props.userReview.pin_users_reviews

    }
    console.log(props);
    // console.dir(contactData);

    return (
        <div className={`${modalContainer} ${modalState ? modalContainerActive : ''}`}>
            <div className="modalReview">
                <div className="modalReviewHeader">
                    <h3>Demande de contact - Fiche utilisateur </h3>
                    <div className="modalClose" onClick={close}></div>
                </div>
                {/* {console.log(contactData)} */}
                <div className="modalReviewBody">
                    <div className="modalReviewInput">
                        <label htmlFor="">Nom - Prénom</label>
                        <input type="text" placeholder={nom} className="inputModalContact" readOnly />
                    </div>
                    <div className="modalReviewInput">
                        <label htmlFor="">Enseigne</label>
                        <input type="text" placeholder={magazin} className="inputModalContact" readOnly />
                    </div>
                    <div className="modalReviewInput">
                        <label htmlFor="">Poste</label>
                        <input type="text" placeholder={poste} className="inputModalContact" readOnly />
                    </div>
                    <div className="modalReviewTextArea">
                        <label htmlFor="">Commentaire</label>
                        <textarea name="" id="" cols="30" rows="10" placeholder={commentaire} className="inputModalContactArea" readOnly></textarea>
                    </div>
                    <div>
                    </div>
                </div>
                <div className="modalReviewFooter">
                </div>
            </div>

        </div>
    );
};
export default ModalDetailReview;