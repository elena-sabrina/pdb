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
                Now you can develop your surfing skills in and out of the water.
                Improve your turns and learn to generate ...
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
        <script
          src='https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/jquery.ScrollMagic.min.js'
          integrity='sha512-RoCOXSeYXosX4PjvRhUz0X+pmdhOJJkbjYZzmZ9dS1Iy9E/WnkTqMy+LVkPX3BV0ZgSFB2AYQKfi6ZKdNdXJnQ=='
          crossorigin='anonymous'
        ></script>

        <script
          src='https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.min.js'
          integrity='sha512-5/OHwmQzDSBS0Ous4/hlYoWLHd06/d2r7LdKZQVBXOA6PvOqWVXtdboiLTU7lQTGyVoKVTNkwi0ol4gHGlw5ww=='
          crossorigin='anonymous'
        ></script>

        <script
          src='https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js'
          integrity='sha512-DkPsH9LzNzZaZjCszwKrooKwgjArJDiEjA5tTgr3YX4E6TYv93ICS8T41yFHJnnSmGpnf0Mvb5NhScYbwvhn2w=='
          crossorigin='anonymous'
        ></script>
      </div>
    );
  }
}

export default Hero;
