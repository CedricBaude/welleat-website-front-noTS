import React from 'react';
import './modalReview.css';
const modalContainerActive = 'modalContainerActive';
const modalContainer = 'modalContainer';

const ModalContact = (props) => {
    const modalState = props.toggle;
    const close = props.action;
    const contactData = props.contact;

    console.log(contactData);




    return (
        <div className={`${modalContainer} ${modalState ? modalContainerActive : ''}`}>
            <div className="modalReview">
                <div className="modalReviewHeader">
                    <h3>Ajouter un avis utilisateur</h3>
                    <div className="modalClose" onClick={close}></div>
                </div>

                <div className="modalReviewBody">
                    <div className="modalReviewInput">
                        <label htmlFor="">Prénom</label>
                        <input type="text" />
                    </div>
                    <div className="modalReviewInput">
                        <label htmlFor="">Magasin / Enseigne</label>
                        <input type="text" />
                    </div>
                    <div className="modalReviewInput">
                        <label htmlFor="">Poste</label>
                        <input type="text" />
                    </div>
                    <div className="modalReviewTextArea">
                        <label htmlFor="">Commentaire</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="modalReviewPicture">
                        <label htmlFor="">Photo</label>
                        <div className="UserReviewPictureTemp">

                        </div>
                    </div>

                </div>
                <div className="modalReviewFooter">
                    <button className='addUserReview'>AJOUTER</button>
                </div>
            </div>

        </div>
    );
};

export default ModalContact;