import React, { Component } from "react";
import wheel from "./../styles/images/wheel.png";
import arrowright from "./../styles/images/arrow-right.svg";
import arrowleft from "./../styles/images/arrow-left.svg";
import "./Slider.scss";

class TeaserOne extends Component {
  render() {
    return (
      <div className='container'>
        <div className='wrapper'>
          <div className='title'>
            <div>
              <h2>Wheels</h2>
            </div>
          </div>
          <div className='teaser-copy'>
            <div>
              <p>
                Our hybrid surf and skate truck. Enhanced pumping and turning
                while maintaining a more traditional skating feel. Our hybrid
                surf and skate truck. Enhanced pumping and turning while
                maintaining a more traditional skating feel.
              </p>
            </div>
          </div>

          <div className='teaser-slider'>
            <button>
              <img src={arrowleft} alt='arrow-left' />
            </button>
            <div className='imagebox'>
              <img src={wheel} alt='logo' />
            </div>
            <button>
              <img src={arrowright} alt='arrow-right' />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TeaserOne;
