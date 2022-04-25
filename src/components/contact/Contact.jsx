import React from "react";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import WhatsappOutlinedIcon from "@mui/icons-material/WhatsappOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e3u2t67",
        "template_m4zup7s",
        form.current,
        "XtsAWLEn1G9WrqMOh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MailOutlinedIcon className='contact_option-icon' />
            <h4>Email</h4>
            <h5>omhari02468@gmail.com</h5>
            <a
              href='mailto:omhari02468@gmail.com'
              rel='noreferrer'
              target='_blank'>
              Send a message
            </a>
          </article>
          <article className='contact_option'>
            <WhatsappOutlinedIcon className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>+917739508977</h5>
            <a
              href='https://api.whatsapp.com/send?phone=+917739508977'
              rel='noreferrer'
              target='_blank'>
              Ping
            </a>
          </article>
          <article className='contact_option'>
            <CallOutlinedIcon className='contact_option-icon' />
            <h4>Call Me</h4>
            <h5>+917739508977</h5>
            <a href='tel:+917739508977'>Call</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Name' required />
          <input type='text' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            rows='7'
            placeholder='Your message'
            required></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
