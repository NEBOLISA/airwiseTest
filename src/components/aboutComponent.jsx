import React from 'react';
import './aboutComponent.css';
import about from '../assets/images/test.png'

const AboutComponent = () => {
  return (
    <div className="container__about">
      <div className="title-container">
      </div>

      <div className="content-container">
        <p className="left-text">
        <h1 className="page-title" style={{textAlign: 'left'}}>
          About <span className="highlighted-text"><b>Air</b></span>Wise
        </h1>
          The purpose of the "<span className="highlighted-text"><b>Air</b></span>Wise" app is to provide users with <span className="highlighted-text"><b>essential</b></span> information to <span className="highlighted-text"><b>monitor</b></span> and <span className="highlighted-text"><b>manage</b></span> their exposure to <span className="highlighted-text"><b>air pollution</b></span> in their current location allowing them to make healthy decisions that will <span className="highlighted-text"><b>benefit</b></span> their life!
        </p>
        <img src={about} alt="Image" className="right-image" />
      </div>
    </div>
  );
};

export default AboutComponent;