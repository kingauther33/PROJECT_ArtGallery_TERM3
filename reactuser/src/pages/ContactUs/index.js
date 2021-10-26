import React from 'react'
import images from '../../assets'

const ContactUs =()=>{
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
                    <form className='contact-main' action="" >
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