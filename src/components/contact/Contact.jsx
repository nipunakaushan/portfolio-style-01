import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import{RiMessengerLine} from 'react-icons/ri'
import{BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zphbqjg', 'template_n1on3qd', form.current, 'x57eGzdjV4ZyPEUn3')

    e.target.reset()
      
  };

  return (
    <section id='contact'>
      <h5>Het In Touch</h5>
      <h2>contact</h2>
      
      <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
                <MdOutlineMail className='contact__option-icon'/>
                <h4>Email</h4>
                <h5>kaushanjayasundara.lankanvibes.com</h5>
                <a href="mailto:kaushanjayasundara@lankanvibes.com" target='_blank'>Send a message</a>
            </article>

            <article className="contact__option">
                <BsWhatsapp className='contact__option-icon'/>
                <h4>Whatsapp</h4>
                <h5>+94775500156</h5>
                <a href="http://api.whatsapp.com/send?phone=+94775500156" target='_blank'>Send a message</a>
            </article>

            <article className="contact__option">
                <RiMessengerLine className='contact__option-icon'/>
                <h4>Messenger</h4>
                <h5>kaushanjayasundara</h5>
                <a href="http://m.me/profile.php?id=100090921799259" target='_blank'>Send a message</a>
            </article>

          </div>
          {/*EMD OF CONTACT OPTION */}
          <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

          </form>
        
      </div>
    </section>
  )
}

export default contact