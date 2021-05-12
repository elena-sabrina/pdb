import React, { Component } from "react";

import ECHO from "./../../styles/images/ECHO.png";
import ULU from "./../../styles/images/ULU.png";

import "./ChooseType.scss";

class ChooseType extends Component {
  constructor(props) {
    super(props);
    console.log("chooseType props", this.props);
    this.state = {
      newsurfskate: {
        type: "none"
      }
    };
  }

  handleTypeChange = (type) => {
    this.setState({
      newsurfskate: {
        type: type
      }
    });

    this.props.onTypeHasChanged(type);
  };

  render() {
    const typeprops = this.props.type;
    const typestate = this.state.newsurfskate.type;
    return (
      <div className='container'>
        <div className='wrapper'>
          <div className='choose-type-title'>
            <div>
              <h2>Type</h2>

              <p>
                Choose <br />
                Props:...{typeprops} <br />
                State:...{typestate}
              </p>
            </div>
          </div>
          <button
            className='choose-type-teaser type-one'
            onClick={() => this.handleTypeChange("echo")}
          >
            {(typestate === "echo" && (
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
            {(typestate === "ulu" && (
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
