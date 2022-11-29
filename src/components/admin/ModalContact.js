import React from 'react';
import './modalContact.css';
const modalContainerActive = 'modalContainerActive';
const modalContainer = 'modalContainer';

const ModalContact = (props) => {
    const modalState = props.toggle;
    const close = props.action;
    const contactData = props.contact;
    let name, firstname, societe, email, commentaire, tel, demandeRappel;
    if (props.contact) {
        name = props.contact.nom_contact;
        firstname = props.contact.prenom_contact;
        societe = props.contact.societe_contact;
        email = props.contact.email_contact;
        commentaire = props.contact.message_contact;
        tel = props.contact.tel;
        demandeRappel = props.contact.demande_rappel;
    }
    console.log(props.demande_rappel);

    let rappel = '';
    if (demandeRappel) {
        rappel = "La personne souhaite être rapellée au " + tel;
    } else {
        rappel = "La personne ne souhaite pas être rapellée";
    }


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
                        <input type="text" placeholder={name + " " + firstname} className="inputModalContact" />
                        <div>

                        </div>

                    </div>
                    <div className="modalReviewInput">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder={email} className="inputModalContact" />
                    </div>
                    <div className="modalReviewInput">
                        <label htmlFor="">Société</label>
                        <input type="text" placeholder={societe} className="inputModalContact" />
                    </div>
                    <div className="modalReviewTextArea">
                        <label htmlFor="">Commentaire</label>
                        <textarea name="" id="" cols="30" rows="10" placeholder={commentaire} className="inputModalContactArea"></textarea>
                    </div>
                    { }
                    <div>{rappel}</div>
                </div>
                <div className="modalReviewFooter">
                    <button className='addUserReview'>AJOUTER</button>
                </div>
            </div>

        </div>
    );
};

export default ModalContact;