import React, { useState } from 'react';
import './style.css';
import axios from 'axios';


const Contact = () => {
    const [firstName, SetFirstName] = useState("");
    const [lastName, SetLastName] = useState("");
    const [contactEmail, SetContactEmail] = useState("");
    const [contactSociety, SetContactSociety] = useState("");
    const [contactMessage, SetContactMessage] = useState("");
    const [contactPhone, SetContactPhone] = useState("");
    const [radio, SetRadio] = useState("");

    const [isActive, setIsActive] = useState(false);




    function postcontactform(e) {
        e.preventDefault();
        console.log('fonction send envoyée');

        axios
            .post(
                "https://testrender-6iwm.onrender.com/mail",
                {
                    nom: firstName,
                    prenom: lastName,
                    email: contactEmail,
                    societe: contactSociety,
                    message: contactMessage,
                    rappel: radio,
                    tel: contactPhone
                }
            )
            .then((res) => console.log("success", res))
            .catch((err) => {
                console.log(err.response);
            });
        alert("Votre message a bien été envoyé.");
        SetFirstName("");
        SetLastName("");
        SetContactEmail("");
        SetContactSociety("");
        SetContactMessage("");
        SetContactPhone("");
        SetRadio("");
    };

    function openInputYes() {
        setIsActive(current => !current);
    };


    return (
        <section className='sub-content contact' id="contact">
            <h3 className='sub-title-2'>Nous contacter<span className='dot'>.</span></h3>
            <div className='contact-form'>
                <form className='form-contact' onSubmit={postcontactform}>
                    <div className="form-contact-input">
                        <label htmlFor="first-name">Nom<span className='dot'>*</span></label>
                        <input type="text" name="first-name" id="first-name" onChange={e => SetFirstName(e.target.value)} value={firstName} required />
                    </div>
                    <br />
                    <div className="form-contact-input">
                        <label htmlFor="last-name">Prénom<span className='dot'>*</span></label>
                        <input type="text" name="last-name" id="last-name" onChange={e => SetLastName(e.target.value)} value={lastName} required />
                    </div>
                    <br />
                    <div className="form-contact-input">
                        <label htmlFor="email">Email<span className='dot'>*</span></label>
                        <input type="email" name="email" id="email" onChange={e => SetContactEmail(e.target.value)} value={contactEmail} required />
                    </div>
                    <br />
                    <div className="form-contact-input">
                        <label htmlFor="text">Société</label>
                        <input type="text" name="society" id="society" onChange={e => SetContactSociety(e.target.value)} value={contactSociety} />
                    </div>
                    <br />
                    <div className="form-contact-textarea">
                        <label htmlFor="message">Message<span className='dot'>*</span></label>
                        <br />
                        <textarea name="message" id="message" rows="10" onChange={e => SetContactMessage(e.target.value)} value={contactMessage} required></textarea>
                    </div>
                    <br />
                    <div className="form-contact-input-newsletter">
                        <label htmlFor="text">Souhaitez-vous être rappelé par téléphone?<span className='dot'>*</span></label>
                        <div className="form-contact-input-newsletter-radio">
                            <input type="radio" name="rappel" id="rappel-oui" onClick={openInputYes} onChange={e => SetRadio(e.target.value)} value={true} required></input>
                            <div className="form-contact-input-newsletter-radio-box">Oui</div>
                            <input type="text" className="phone" style={{ display: isActive ? '' : 'none' }} placeholder="N° de téléphone" onChange={e => SetContactPhone(e.target.value)} value={contactPhone}></input>
                            <input type="radio" name="rappel" id="rappel-non" onChange={e => SetRadio(e.target.value)} value={false} required></input>
                            <div className="form-contact-input-newsletter-radio-box">Non</div>
                        </div>
                    </div>
                    <p><span className='dot'>*</span>obligatoire</p>
                    <div className='submit-button'>
                        <button type="submit">Envoyer</button>
                    </div>

                </form>
            </div >
        </section >
    );
};

export default Contact;

