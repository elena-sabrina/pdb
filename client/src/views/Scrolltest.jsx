


import React, { Component } from "react";

import testvideo from "./../styles/images/scrollvideo/testvideo.mp4";
import image1 from "./../styles/images/scrollvideo/image1.png";

import "./../components/Hero.scss";
import "./../components/HeroAnimations.scss";

import BlackCenter from "./../components/BlackCenter";
import TrucksSpecial from "./../components/TrucksSpecial";
import TeaserTwo from "./../components/TeaserTwo";
import Slider from "../components/Slider";
import TeaserButton from "../components/TeaserButton";

import "./Home.scss";

class Scrolltest extends Component {
  constructor(props) {
    super(props);
    // this.myRef = React.createRef();
    this.state = {
      //scrollTop: "1"
      currentFrame: ""
    };
  }

  //SCROLL VIDEO
  /*handleVideoMounted = (video) => {
    console.log("handleVideoMounted mounted");
    if (video !== null) {
      video.currentTime = this.state.scrollTop;
    }
    console.log("video", video);
  };

  handleVideoScroll = (event) => {
    const scrollTop = this.myRef.current.scrollTop;
    console.log(` ${scrollTop}`);
    this.setState({
      scrollTop: scrollTop
    });
    this.RemountVideo();
  };

  RemountVideo = () => {
    let video = document.getElementById("video");
    this.handleVideoMounted(video);
  };*/

  componentDidMount = () => {
    const canvas = document.getElementsByClassName("canvas");

    console.log(canvas);
    const context = canvas.getContext("2d");

    const currentFrame = (index) =>
      `image/${index.toString().padStart(4, "0")}`;

    // Set canvas dimensions
    canvas.width = 1158;
    canvas.height = 770;

    // Create, load and draw the image
    const img = new Image();
    img.src = currentFrame(1); // we'll make this dynamic in the next step, for now we'll just load image 1 of our sequence
    img.onload = function () {
      context.drawImage(img, 0, 0);
    };

    this.setState({
      currentFrame
    });
  };

  render() {
    return (
      <div>
        {(this.state.currentFrame && (
          <div class='parallax'>
            <div
              class=' Scroll parallax__group'
              //ref={this.myRef}
              // onScroll={this.handleVideoScroll}
              //onScroll={this.handleImageScroll}
            >
              <div className=' container hero base parallax__layer parallax__layer--base'>
                <div className='wrapper'>
                  <div className='hero-copy'>
                    <div>
                      <h1>
                        PDB <br /> Surfskates
                      </h1>
                      <p>
                        Now you can develop your surfing skills in and out of
                        the water. Improve your turns and learn to generate ...
                        {this.state.scrollTop}
                      </p>
                    </div>
                  </div>
                  <div className='video intro'>
                    <canvas className='canvas' />
                  </div>
                </div>
              </div>
              <BlackCenter />
            </div>
          </div>
        )) || <p>No currentFrame</p>}

        <TrucksSpecial />
        <TeaserTwo />
        <Slider />
        <TeaserButton />
      </div>
    );
  }
}

export default Scrolltest;

