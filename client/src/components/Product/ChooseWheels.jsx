import React, { Component } from "react";

import wheel from "./../../styles/images/wheel.png";

import "./ChooseWheels.scss";

class ChooseType extends Component {
  constructor(props) {
    super(props);
    console.log("chooseWheels props", this.props);
    this.state = {
      new_surfskate: {
        wheel: "none"
      }
    };
  }

  handleWheelChange = (wheel) => {
    this.setState({
      new_surfskate: {
        tywheelpe: wheel
      }
    });
    console.log(wheel);
    this.props.onWheelHasChanged({ wheel });
  };

  render() {
    const wheelcolor = this.state.new_surfskate.wheel;
    return (
      <div className='container'>
        <div className='wrapper'>
          <div className='choose-wheels-title'>
            <div>
              <h2>Wheels</h2>
              <p>Choose ...</p>
            </div>
          </div>

          <button
            className='choose-wheels-teaser wheel-one'
            onClick={() => this.handleWheelChange("white")}
          >
            <div className='choose-wheels-box'>
              <img src={wheel} alt='surfskateimage' />

              <p>White</p>
            </div>
          </button>

          <button
            className='choose-wheels-teaser wheel-two'
            onClick={() => this.handleWheelChange("blue")}
          >
            <div className='choose-wheels-box'>
              <img src={wheel} alt='surfskateimage' />

              <p>Blue</p>
            </div>
          </button>

          <button
            className='choose-wheels-teaser wheel-three'
            onClick={() => this.handleWheelChange("green")}
          >
            <div className='choose-wheels-box'>
              <img src={wheel} alt='surfskateimage' />

              <p>Green</p>
            </div>
          </button>

          <button
            className='choose-wheels-teaser wheel-four'
            onClick={() => this.handleWheelChange("red")}
          >
            <div className='choose-wheels-box'>
              <img src={wheel} alt='surfskateimage' />

              <p>Red</p>
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default ChooseType;
