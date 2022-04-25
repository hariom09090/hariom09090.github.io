import React from "react";
import "./about.css";
import ME from "../../assets/me-about1.jpg";

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='AboutImage' />
          </div>
        </div>
        <div className='about_content'>
          {/* <div className='about_cards'>
            <article className='about_card'>
              <h5>Experience</h5>
              <small>Samsung Research Intern</small>
            </article>
          </div> */}
          <p>
            Pre-final Year at KIIT pursuing B. Tech in Information Technology. I
            am building up my career in competitive programming. And also in the
            web development field. Having knowledge of machine learning and
            cloud too.
          </p>
          {/* <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
