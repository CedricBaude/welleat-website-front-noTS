import React from 'react';
import './style.css';

const Contact = () => {
    return (
        <section className='sub-content contact' id="contact">
            <h3 className='sub-title-2'>Nous contacter<span className='dot'>.</span></h3>
            <div className='contact-form'>
                <form className='form-contact'>
                    <div className="form-contact-input">
                        <label htmlFor="first-name">Nom<span className='dot'>*</span></label>
                        <input type="text" name="first-name" id="first-name" />
                    </div>
                    <br />
                    <div className="form-contact-input">
                        <label htmlFor="last-name">Prénom<span className='dot'>*</span></label>
                        <input type="text" name="last-name" id="last-name" />
                    </div>
                    <br />
                    <div className="form-contact-input">
                        <label htmlFor="email">Email<span className='dot'>*</span></label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <br />
                    <div className="form-contact-input">
                        <label htmlFor="text">Société</label>
                        <input type="text" name="society" id="society" />
                    </div>
                    <br />
                    <div className="form-contact-textarea">
                        <label htmlFor="message">Message<span className='dot'>*</span></label>
                        <br />
                        <textarea name="message" id="message" rows="10" ></textarea>
                    </div>
                    <br />
                    <div>
                        <div className="">
                            <label htmlFor="text">Souhaitez-vous vous inscrire à la newsletter?</label>
                            <input type="radio" name="newsletter" id="newsletter" value="oui" />Oui
                            <input type="radio" name="newsletter" id="newsletter" value="non" />Non
                        </div>

                        <div className="form-contact-input">
                            <label htmlFor="text">Souhaitez-vous être rappelé par téléphone?</label>
                            <input type="text" name="rappel-oui" id="rappel-oui" />
                            <input type="radio" name="rappel-non" id="rappel-non" value="non" />Non
                        </div>
                    </div>
                    <p><span className='dot'>*</span>obligatoire</p>
                    <div className='submit-button'>
                        <input type="submit" value="Envoyer" />
                    </div>

                </form>
            </div >
        </section >
    );
};

export default Contact;

