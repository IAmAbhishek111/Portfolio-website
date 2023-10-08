import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'


const Contact = () => {
  const form = useRef();
  // const service = process.env.serviceID
  // const template = process.env.templateID
  // const user = process.env.userID

  // console.log(service);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rdohnpz', 'template_2j15bjm', form.current, '92fQbfE9Mn6JjirF-')
      .then((result) => {
          console.log(result.text);
          toast.success("Messege Sent Successfully!")

      }, (error) => {
          console.log(error.text);
          toast.error("Please Try again!")
      });
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>abhishek.jha8387@gmail.com</h5>
            <a href="mailto:abhishek.jha8387@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Abhishek's LinkedIn</h5>
            <a href="https://www.linkedin.com/in/abhishek141100/" target="_blank" rel='noreferrer'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 8810267067</h5>
            <a href="https://wa.me/8810267067" target="_blank" rel='noreferrer'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      <ToastContainer position='top-right' />
    </section>
  )
}

export default Contact