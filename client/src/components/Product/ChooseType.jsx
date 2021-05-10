import React, { Component } from "react";

import ECHO from "./../../styles/images/ECHO.png";
import ULU from "./../../styles/images/ULU.png";

import "./ChooseType.scss";

class ChooseType extends Component {
  constructor(props) {
    super(props);
    console.log("chooseType props", this.props);
    this.state = {
      new_surfskate: {
        type: "none"
      }
    };
  }

  handleTypeChange = (type) => {
    this.setState({
      new_surfskate: {
        type: type
      }
    });
    console.log(type);
    this.props.onTypeHasChanged({ type });
  };

  render() {
    const type = this.state.new_surfskate.type;

    return (
      <div className='container'>
        <div className='wrapper'>
          <div className='choose-type-title'>
            <div>
              <h2>Type</h2>

              <p>Choose {type}</p>
            </div>
          </div>
          <button
            className='choose-type-teaser type-one'
            //onClick={this.handleButtonClickEcho}
            onClick={() => this.handleTypeChange("echo")}
          >
            {(type === "echo" && (
              <div className='selected'>
                <div className='choose-type-box'>
                  <img src={ECHO} alt='surfskateimage' />
                  <h4>ECHO</h4>
                  <p>Your hybrid PDB.</p>
                </div>
              </div>
            )) || (
              <div className='not-selected'>
                <div className='choose-type-box'>
                  <img src={ECHO} alt='surfskateimage' />
                  <h4>ECHO</h4>
                  <p>Your hybrid PDB.</p>
                </div>
              </div>
            )}
          </button>

          <button
            className='choose-type-teaser type-two'
            onClick={() => this.handleTypeChange("ulu")}
          >
            {(type === "ulu" && (
              <div className='selected'>
                <div className='choose-type-box'>
                  <img src={ULU} alt='surfskateimage' />
                  <h4>ULU</h4>
                  <p>Your advanced PDB.</p>
                </div>
              </div>
            )) || (
              <div className='not-selected'>
                <div className='choose-type-box'>
                  <img src={ULU} alt='surfskateimage' />
                  <h4>ULU</h4>
                  <p>Your advanced PDB.</p>
                </div>
              </div>
            )}
          </button>
        </div>
      </div>
    );
  }
}

export default ChooseType;
