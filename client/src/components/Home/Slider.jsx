import React, { Component } from "react";

import wheel from "./../../styles/images/wheel.png";
import wheel1 from "./../../styles/images/wheel1.jpg";
import wheel2 from "./../../styles/images/wheel2.jpg";
import arrowright from "./../../styles/images/arrow-right.svg";
import arrowleft from "./../../styles/images/arrow-left.svg";
import "./Slider.scss";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /* dare: props.dare, */
      image: 1
    };
  }

  /* handleImagesliderPlus() {
    console.log("handleImagesliderPlus");

    const oldimage = this.props.image;
    const image = oldimage + 1;
    console.log(image);
    this.props.onImageChange({ image });
  }

  /*
  handleImagesliderPlus = (image) => {
    console.log("handleImagesliderPlus mounted");
    this.addState(image);
    console.log("...", image);
    this.props.onImageChange({});
  };

  addState = (image) => {
    console.log("addstate");

    console.log(image);
    const x = this.props.image;
    const y = x + 1;
    console.log("x");
    console.log(x);
    console.log("y");
    console.log(y);
    this.setState({ image: y });
    console.log("state");
    const state = this.state.image;
    console.log(state);
    console.log(image);
  };*/

  incrementCount = () => {
    const sliderLength = 4;
    const { image } = this.state;
    var end = image < sliderLength ? false : true;
    if (end) {
      this.setState({
        image: this.state.image - (sliderLength - 1)
      });
    } else {
      this.setState({
        image: this.state.image + 1
      });
    }
    console.log(this.state.image);
  };

  decrementCount = () => {
    const sliderLength = 4;
    const { image } = this.state;
    var start = image < 2 ? true : false;
    if (start) {
      this.setState({
        image: this.state.image + (sliderLength - 1)
      });
    } else {
      this.setState({
        image: this.state.image - 1
      });
    }
    console.log(this.state.image);
  };

  render() {
    const image = this.state.image;
    return (
      <div>
        <div className='container'>
          <div className='wrapper'>
            <div className='title'>
              <div>
                <h2>Wheels </h2>
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
              <button onClick={this.decrementCount}>
                <img src={arrowleft} alt='arrow-left' />
              </button>

              <div className='slideshow-container'>
                <div className='mySlides slide-1'>
                  {(image === 1 && <img src={wheel} alt='wheelimage' />) ||
                    (image === 2 && <img src={wheel1} alt='wheelimage' />) ||
                    (image === 3 && <img src={wheel2} alt='wheelimage' />) ||
                    (image === 4 && <img src={wheel1} alt='wheelimage' />)}
                </div>
              </div>

              <button onClick={this.incrementCount}>
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
