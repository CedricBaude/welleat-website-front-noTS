import React, { useState } from 'react';
import './modalReview.css';
import axios from 'axios';

const modalContainerActive = 'modalContainerActive';
const modalContainer = 'modalContainer';

const ModalReview = (props) => {
    const modalState = props.toggle
    const close = props.action
    const [name, SetName] = useState("");
    const [store, SetStore] = useState("");
    const [job, SetJob] = useState("");
    const [comment, SetComment] = useState("");
    const [picture, SetPicture] = useState("");
    const [pin, SetPin] = useState("");

    function sendModalReviewData() {
        const sendableData = {
            prenom: name,
            magasin: store,
            poste: job,
            commentaire: comment,
            photo: picture,
            pin: pin
        };
        axios.post('https://testrender-6iwm.onrender.com/avis', sendableData)
            .then(response => console.log(response));
        alert("Avis utilisateur ajouté avec succés !")
    }

    return (
        <div className={`${modalContainer} ${modalState ? modalContainerActive : ''}`}>
            <div className="modalReview">
                <div className="modalReviewHeader">
                    <h3>Ajouter un avis utilisateur</h3>
                    <div className="modalClose" onClick={close}></div>
                </div>
                <form onSubmit={sendModalReviewData}>
                    <div className="modalReviewBody">
                        <div className="modalReviewInput">
                            <label htmlFor="">Prénom</label>
                            <input type="text" onChange={e => SetName(e.target.value)} />
                        </div>
                        <div className="modalReviewInput">
                            <label htmlFor="">Magasin / Enseigne</label>
                            <input type="text" onChange={e => SetStore(e.target.value)} />
                        </div>
                        <div className="modalReviewInput">
                            <label htmlFor="">Poste</label>
                            <input type="text" onChange={e => SetJob(e.target.value)} />
                        </div>
                        <div className="modalReviewTextArea">
                            <label htmlFor="">Commentaire</label>
                            <textarea name="" id="" cols="30" rows="10" onChange={e => SetComment(e.target.value)}></textarea >
                        </div>
                        <div className="modalReviewPicture">
                            <label htmlFor="">Photo     </label>
                            <input type="text" onChange={e => SetPicture(e.target.value)} value="user_picture/avatar-defaut.jpg" />
                            <div className="UserReviewPictureTemp">
                            </div>
                        </div>
                        <div className="modalReviewInput">

                            <div className='radioModalReview'>
                                <label htmlFor="">Pin</label>
                                <input type="radio" name="rappel" className="radioModalReviewInputContent" id="rappel-oui" onChange={e => SetPin(e.target.value)} value={true}></input>
                                <div className="form-contact-input-newsletter-radio-box">Oui</div>
                                <input type="radio" name="rappel" className="radioModalReviewInputContent" id="rappel-non" onChange={e => SetPin(e.target.value)} value={false}></input>
                                <div className="form-contact-input-newsletter-radio-box">Non</div>
                            </div>
                        </div>
                    </div>
                    <button className='addUserReview'>AJOUTER</button>
                </form>
                <div className="modalReviewFooter">

                </div>
            </div>

        </div>
    );
};

export default ModalReview;