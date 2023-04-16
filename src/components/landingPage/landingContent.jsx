import React from 'react';
import './style.css';

const LandingContent = (props) => {
  const { image, title } = props;

  const handleImageHover = (e) => {
    const images = document.querySelectorAll('.lp2');
    images.forEach((img) => {
      if (img !== e.target) {
        img.style.filter = 'blur(5px)';
      }
    });
    e.target.style.width = '400px';
  };

  const handleImageLeave = (e) => {
    const images = document.querySelectorAll('.lp2');
    images.forEach((img) => {
      if (img !== e.target) {
        img.style.filter = 'none';
      }
    });
    e.target.style.width = '350px';
  };

  return (
    <>
      <img
        className='lp2'
        style={{ width: '350px', margin: '30px' }}
        src={image}
        alt=''
        onMouseEnter={handleImageHover}
        onMouseLeave={handleImageLeave}
      />
      <span className='pop-text fs-4 col-lg-2 text-start position-absolute' style={{ bottom: '50px', left: '60px' }}>
        {title}
      </span>
    </>
  );
};

export default LandingContent;
