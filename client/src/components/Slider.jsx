import React, { Component } from "react";

import wheel from "./../styles/images/wheel.png";
import wheel1 from "./../styles/images/wheel1.jpg";
import wheel2 from "./../styles/images/wheel2.jpg";
import arrowright from "./../styles/images/arrow-right.svg";
import arrowleft from "./../styles/images/arrow-left.svg";
import "./Slider.scss";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /* dare: props.dare, */
      image: null
    };
  }

  /* handleImagesliderPlus() {
    console.log("handleImagesliderPlus");

    const oldimage = this.props.image;
    const image = oldimage + 1;
    console.log(image);
    this.props.onImageChange({ image });
  }

*/

  handleImagesliderPlus = (image) => {
    this.addState(image);
    this.props.onImageChange({ image });
  };
  addState = (image) => {
    console.log("x");
    console.log(image);

    const value = 3;
    this.setState({
      name: value
    });
    console.log("state", this.state.image);
  };

  render() {
    const image = this.props.image;
    return (
      <div>
        <div className='container'>
          <div className='wrapper'>
            <div className='title'>
              <div>
                <h2>Wheels {image} </h2>
              </div>
            </div>
            <div className='teaser-copy'>
              <div>
                <p>
                  Your wheels have that extra-grip power to take hold of the
                  asphalt. Radical turns, powerful carves: you'll never skid.
                  Unless you’re really going for it…
                </p>
              </div>
            </div>

            <div className='teaser-slider'>
              <button
                className='prev'
                onClick={(this.handleImagesliderMinus = this.props.image)}
              >
                <img src={arrowleft} alt='arrow-left' />
              </button>

              <div className='slideshow-container'>
                <div className='mySlides slide-1'>
                  {(image === 1 && <img src={wheel} alt='wheelimage' />) ||
                    (image === 2 && <img src={wheel1} alt='wheelimage' />) ||
                    (image === 3 && <img src={wheel2} alt='wheelimage' />)}
                </div>
              </div>

              <button
                className='next'
                onClick={() => this.handleImagesliderPlus(image)}
              >
                <img src={arrowright} alt='arrow-right' />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
