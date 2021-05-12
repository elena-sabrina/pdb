import React, { Component } from "react";

import ECHO from "./../../styles/images/ECHO.png";
import ULU from "./../../styles/images/ULU.png";
import wheel from "./../../styles/images/wheel.png";

import "./ChooseType.scss";
import "./ChooseWheels.scss";
import "./Summary.scss";

class Configure extends Component {
  constructor(props) {
    super(props);
    console.log("Configure props", this.props);
    this.state = {
      type: "none",
      wheel: "none"
    };
  }

  handleTypeChange = (type) => {
    this.setState({
      type: type
    });

    console.log("handleTypeChange", this.state.type, this.state.wheel);

    //this.props.onTypeHasChanged(type);
  };

  handleWheelChange = (wheel) => {
    this.setState({
      wheel: wheel
    });
    console.log("handleTypeChange", this.state.type, this.state.wheel);

    //this.props.onWheelHasChanged(wheel);
  };

  handleConfigureChange = () => {
    const type = this.state.type;
    const wheel = this.state.wheel;
    console.log("handleConfigureChange", type, wheel);
    this.props.onConfigureHasChanged(type, wheel);
  };

  render() {
    const typeprops = this.props.type;
    const typestate = this.state.type;
    const wheelprops = this.props.wheel;
    const wheelstate = this.state.wheel;
    return (
      <div>
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
        <div className='container'>
          <div className='wrapper'>
            <div className='choose-wheels-title'>
              <div>
                <h2>Wheels</h2>
                Choose <br />
                Props:...{wheelprops} <br />
                State:...{wheelstate}
              </div>
            </div>

            <button
              className='choose-wheels-teaser wheel-one'
              onClick={() => this.handleWheelChange("white")}
            >
              {(wheelprops === "white" && (
                <div className='selected'>
                  <div className='choose-wheels-box'>
                    <img src={wheel} alt='surfskateimage' />
                    <p>White</p>
                  </div>
                </div>
              )) || (
                <div className='not-selected'>
                  <div className='choose-wheels-box'>
                    <img src={wheel} alt='surfskateimage' />
                    <p>White</p>
                  </div>
                </div>
              )}
            </button>

            <button
              className='choose-wheels-teaser wheel-two'
              onClick={() => this.handleWheelChange("green")}
            >
              {(wheelprops === "green" && (
                <div className='selected'>
                  <div className='choose-wheels-box'>
                    <img src={wheel} alt='surfskateimage' />
                    <p>Green</p>
                  </div>
                </div>
              )) || (
                <div className='not-selected'>
                  <div className='choose-wheels-box'>
                    <img src={wheel} alt='surfskateimage' />
                    <p>Green</p>
                  </div>
                </div>
              )}
            </button>

            <button
              className='choose-wheels-teaser wheel-three'
              onClick={() => this.handleWheelChange("red")}
            >
              {(wheelprops === "red" && (
                <div className='selected'>
                  <div className='choose-wheels-box'>
                    <img src={wheel} alt='surfskateimage' />
                    <p>Red</p>
                  </div>
                </div>
              )) || (
                <div className='not-selected'>
                  <div className='choose-wheels-box'>
                    <img src={wheel} alt='surfskateimage' />
                    <p>Red</p>
                  </div>
                </div>
              )}
            </button>

            <button
              className='choose-wheels-teaser wheel-four'
              onClick={() => this.handleWheelChange("black")}
            >
              {(wheelprops === "black" && (
                <div className='selected'>
                  <div className='choose-wheels-box'>
                    <img src={wheel} alt='surfskateimage' />
                    <p>Black</p>
                  </div>
                </div>
              )) || (
                <div className='not-selected'>
                  <div className='choose-wheels-box'>
                    <img src={wheel} alt='surfskateimage' />
                    <p>Black</p>
                  </div>
                </div>
              )}
            </button>
          </div>
        </div>
        <div className='container'>
          <div className='wrapper'>
            <div className='summary-title'>
              <div>
                <h2>Summary</h2>

                <p>...</p>
              </div>
            </div>
            <div className='summary'>
              <table>
                <tr>
                  <td>Type: {typestate}</td>

                  <td>200.000 IDR</td>
                </tr>
                <tr>
                  <td>Wheels: {wheelstate}</td>

                  <td>50.000 IDR</td>
                </tr>
                <hr />
                <tr>
                  <td>Total</td>

                  <td>250.000 IDR</td>
                </tr>
              </table>
              <div>
                <button>Add Order</button>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='wrapper TeaserButton'>
            <div>
              <button
                className='choose-type-teaser type-two'
                onClick={this.handleConfigureChange}
              >
                Buuuuuuuttton
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Configure;
