import React from "react";
import CV from "../../assets/cv.pdf";

const CTA = () => {
  return (
    <div className='cta'>
      <a rel='noreferrer' href={CV} target='_blank' className='btn'>
        CV
      </a>
      <a href='#contact' className='btn btn-primary'>
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
