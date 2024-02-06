import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";
import config from './config';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const { serviceId, templateId, publicKey } = config.emailjs;

    emailjs
      .sendForm('serviceId', 'templateId', form.current, {
        publicKey: 'publicKey',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    return (
        <section className="contact section" id="contact"> 
            <h2 className="section__title">Contact</h2>
            <span className="section__subtitle"> Get in touch </span>

            <div className="contact__container container grid">
                <div className="contact_information">

                    <i className="uil uil-envelope contact__icon"></i>
                    <div className="contact_description">
                        <h3 className="contact__title">Email</h3>
                        <span className="contact__subtitle"> kevinsalad7@gmail.com </span>
                    </div>
                </div>

                <div className="contact_information">
                    
                    <i className="uil uil-phone contact__icon"></i>
                    <div>
                        <h3 className="contact__title">Phone</h3>
                        <span className="contact__subtitle"> 832-878-5817 </span>
                    </div>
                </div>

                <div>
                    <h3 className="contact_title"> Message Me </h3>
                    <form ref={form} onSubmit={sendEmail} className="contact_form">
                        <div className="contact_form-div">
                            <label className="contact_form-tag">Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                className="contact_form-input" 
                                placeholder="Insert Name"
                            />
                        </div>
                        <div className="contact_form-div">
                            <label className="contact_form-tag">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                className="contact_form-input" 
                                placeholder="Insert Email"
                            />
                        </div>
                        <div className="contact_form-div contact_form-area">
                            <label className="contact_form-tag">Description </label>
                            <textarea 
                                name="description" 
                                cols="30"
                                rows="10"
                                className="contact_form-input" 
                                placeholder="Write your message"
                            />
                        </div>
                        <button className="button button-flex"> Send Message <i className="uil uil-navigator button_icon"></i> </button>

                    </form>
                </div>

            </div>
        </section>
    );
}

export default Contact;