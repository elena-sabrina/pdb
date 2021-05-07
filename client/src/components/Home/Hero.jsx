import React, { Component } from "react";

import testvideo from "./../styles/images/scrollvideo/testvideo.mp4";
import image1 from "./../styles/images/scrollvideo/image1.png";

import "./Hero.scss";
import "./HeroAnimations.scss";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      scrollTop: "1"
    };
  }

  handleVideoMounted = (video) => {
    console.log("handleVideoMounted mounted");
    if (video !== null) {
      video.currentTime = this.state.scrollTop;
    }
    console.log("video", video);
  };

  handleVideoScroll = (event) => {
    const scrollTop = this.myRef.current.scrollTop / 100;
    console.log(` ${scrollTop}`);
    this.setState({
      scrollTop: scrollTop
    });
    this.RemountVideo();
  };

  RemountVideo = () => {
    let video = document.getElementById("video");
    this.handleVideoMounted(video);
  };

  /*componentDidMount(event) {
    let scrollpos = event.scrollPos;
    let scrollwindow = window.scrollY;
    window.scrollY;
    this.setState({
      scrollpos
    });
    console.log(this.state.scrollpos);
  }*/
  /*
  handleScroll(update, event) {
    const intro = document.querySelector(".intro");

    const controller = new ScrollMagic.Controller();

    const scene = new ScrollMagic.Scene({
      duration: 9000,
      triggerElemnt: intro,
      triggerHook: 0
    })
      .addIndicators()
      .setPin(intro)
      .addTo(controller);
  }
*/
  render() {
    return (
      <div
        className='Scroll'
        ref={this.myRef}
        onScroll={this.handleVideoScroll}
        className='container hero base parallax__layer parallax__layer--base'
      >
        <div className='wrapper'>
          <div className='hero-copy'>
            <div>
              <h1>
                PDB <br /> Surfskates {this.state.scrollTop}
              </h1>
              <p>
                Develop your surf skills on land. Carve, trim, cutbacks, snaps:
                Improve your technique. Shred the wave you create.
              </p>
            </div>
          </div>
          <div className='video intro'>
            <video
              loop
              autoPlay
              muted
              id='video'
              src={testvideo}
              ref={this.handleVideoMounted}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
