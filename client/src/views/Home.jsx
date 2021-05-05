import React, { Component } from "react";

import testvideo from "./../styles/images/scrollvideo/testvideo.mp4";
import "./../components/Hero.scss";
import "./../components/HeroAnimations.scss";

import BlackCenter from "./../components/BlackCenter";
import TrucksSpecial from "./../components/TrucksSpecial";
import TeaserTwo from "./../components/TeaserTwo";
import Slider from "../components/Slider";
import TeaserButton from "../components/TeaserButton";

import "./Home.scss";

class Home extends Component {
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
  };
  render() {
    return (
      <div>
        <div class='parallax'>
          <div class='parallax__group'>
            <div
              ref={this.myRef}
              onScroll={this.handleVideoScroll}
              className='Scroll container hero base parallax__layer parallax__layer--base'
            >
              <div className='wrapper'>
                <div className='hero-copy'>
                  <div>
                    <h1>
                      PDB <br /> Surfskates
                    </h1>
                    <p>
                      Now you can develop your surfing skills in and out of the
                      water. Improve your turns and learn to generate ...
                      {this.state.scrollTop}
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
            <BlackCenter />
          </div>
        </div>

        <TrucksSpecial />
        <TeaserTwo />
        <Slider />
        <TeaserButton />
      </div>
    );
  }
}

export default Home;
