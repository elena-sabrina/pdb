import React, { Component } from "react";

import wheel from "./../../styles/images/wheel.png";

import "./ChooseWheels.scss";

class ChooseType extends Component {
  constructor(props) {
    super(props);
    console.log("chooseWheels props", this.props);
    this.state = {
      newsurfskate: {
        wheel: "none"
      }
    };
  }

  handleWheelChange = (wheel) => {
    this.setState({
      newsurfskate: {
        wheel: wheel
      }
    });

    this.props.onWheelHasChanged(wheel);
  };

  render() {
    const wheelprops = this.props.wheel;
    const wheelstate = this.state.newsurfskate.wheel;

    return (
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
    );
  }
}

export default ChooseType;
