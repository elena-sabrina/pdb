import React, { Component } from "react";

import ECHO from "./../../styles/images/ECHO.png";
import ULU from "./../../styles/images/ULU.png";

import "./ChooseType.scss";

class ChooseType extends Component {
  render() {
    return (
      <div className='container'>
        <div className='wrapper'>
          <div className='choose-type-title'>
            <div>
              <h2>Type</h2>
              <p>Choose ...</p>
            </div>
          </div>
          <div className='choose-type-teaser type-one'>
            <div className='choose-type-box'>
              <img src={ECHO} alt='surfskateimage' />
              <h4>ECHO</h4>
              <p>Your hybrid PDB.</p>
            </div>
          </div>

          <div className='choose-type-teaser type-two'>
            <div className='choose-type-box'>
              <img src={ULU} alt='surfskateimage' />
              <h4>ULU</h4>
              <p>Your advanced PDB.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChooseType;
