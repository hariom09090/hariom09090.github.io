import React from "react";
import { SocialIcon } from "react-social-icons";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>
        HARI OM
      </a>
      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <div className='footer_socials'>
        <SocialIcon url='https://twitter.com/hariom09090' target='_blank' />
        <SocialIcon
          url='https://www.instagram.com/_._._hariom_._._/'
          target='_blank'
        />
      </div>
      <div className='footer_copyright'>
        <small>&copy; HARI OM. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
