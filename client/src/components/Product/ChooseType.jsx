import React, { Component } from "react";

import ECHO from "./../../styles/images/ECHO.png";
import ULU from "./../../styles/images/ULU.png";

import "./ChooseType.scss";

class ChooseType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surfskate_type: ""
    };
  }

  handleButtonClickEcho = () => {
    const type = "echo";
    this.props.onTypeHasChanged({ type });
  };

  handleButtonClickUlu = () => {
    const type = "ulu";
    this.props.onTypeHasChanged({ type });
  };

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
          <button
            className='choose-type-teaser type-one'
            onClick={this.handleButtonClickEcho}
          >
            <div className='choose-type-box'>
              <img src={ECHO} alt='surfskateimage' />
              <h4>ECHO</h4>
              <p>Your hybrid PDB.</p>
            </div>
          </button>

          <button
            className='choose-type-teaser type-two'
            onClick={this.handleButtonClickUlu}
          >
            <div className='choose-type-box'>
              <img src={ULU} alt='surfskateimage' />
              <h4>ULU</h4>
              <p>Your advanced PDB.</p>
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default ChooseType;
