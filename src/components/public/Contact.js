import React from 'react';
import './style.css';

const Contact = () => {
    return (
        <section className='sub-content contact' id="contact">
            <h3 className='sub-title-2'>Nous contacter.</h3>
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
                    <label htmlFor="message">Message<span className='dot'>*</span></label>
                    <br />
                    <textarea name="message" id="message" cols="30" rows="10" ></textarea>
                    <br />
                    <p><span className='dot'>*</span>obligatoire</p>
                    <input type="submit" value="Envoyer" />
                </form>
            </div >
        </section >
    );
};

export default Contact;

