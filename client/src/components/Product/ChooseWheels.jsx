import React, { Component } from "react";

import wheel from "./../../styles/images/wheel.png";

import "./ChooseWheels.scss";

class ChooseType extends Component {
  render() {
    return (
      <div className='container'>
        <div className='wrapper'>
          <div className='choose-wheels-title'>
            <div>
              <h2>Wheels</h2>
              <p>Choose ...</p>
            </div>
          </div>
          <div className='choose-wheels-teaser wheel-one'>
            <div className='choose-wheels-box'>
              <img src={wheel} alt='surfskateimage' />

              <p>White</p>
            </div>
          </div>

          <div className='choose-wheels-teaser wheel-two'>
            <div className='choose-wheels-box'>
              <img src={wheel} alt='surfskateimage' />

              <p>Blue</p>
            </div>
          </div>

          <div className='choose-wheels-teaser wheel-three'>
            <div className='choose-wheels-box'>
              <img src={wheel} alt='surfskateimage' />

              <p>Green</p>
            </div>
          </div>

          <div className='choose-wheels-teaser wheel-four'>
            <div className='choose-wheels-box'>
              <img src={wheel} alt='surfskateimage' />

              <p>Red</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChooseType;
