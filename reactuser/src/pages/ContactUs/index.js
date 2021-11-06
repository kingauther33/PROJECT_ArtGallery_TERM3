import React from 'react'
import images from '../../assets'
import emailjs from 'emailjs-com';

const ContactUs =(props)=>{

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_c1ioigi', 'template_eq4odzt', e.target, 'user_Yw8G4cnQLWpDzcKPvRXio')
            .then((result) => {
                alert("Success")
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return(

        <div className='Contact'>
            <section className='banner'>
                <div className='banner-text'>
                    <h2>Contact Us</h2>
                </div>
            </section>
            <div className='contact-section'>
                <div className="contact-info">
                    <img className='img-contact' src={images.ContactUs.img} alt=""/>
                </div>
                <div className="contact-from">
                    <form className='contact-main' action="" onSubmit={sendEmail} >
                        <input type="text" name='name' className='text-box' placeholder='Name' required />
                        <input type="email" name='email' className='text-box' placeholder='Email' required />
                        <textarea className='text-area' name='message' rows='5' placeholder='Message' required/>
                        <input type='submit' name='submit' className='send-box' value='Send'/>
                    </form>
                </div>

            </div>
        </div>
    )
};

export  default ContactUs;