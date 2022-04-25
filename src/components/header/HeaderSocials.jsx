import React from "react";
// import { AiFillLinkedin } from "react-icons/ai";
// import { AiFillGithub } from "react-icons/ai";
// import { AiFillTwitterCircle } from "react-icons/ai";
import { SocialIcon } from "react-social-icons";

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      {/* <a
        rel='noreferrer'
        href='https://linkedin.com/in/hariom09090'
        target='_blank'>
        <AiFillLinkedin />
      </a>
      <a rel='noreferrer' href='https://github.com/hariom09090' target='_blank'>
        <AiFillGithub />
      </a>
      <a
        rel='noreferrer'
        href='https://twitter.com/hariom09090'
        target='_blank'>
        <AiFillTwitterCircle />
      </a> */}
      <SocialIcon url='https://github.com/hariom09090' target='_blank' />
      <SocialIcon url='https://twitter.com/hariom09090' target='_blank' />
      <SocialIcon url='https://linkedin.com/in/hariom09090' target='_blank' />
    </div>
  );
};

export default HeaderSocials;
