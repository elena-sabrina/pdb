import React, { Component } from "react";

import image1 from "./../styles/images/scrollvideo/image1.png";
import "./Hero.scss";
import "./HeroAnimations.scss";

class Hero extends Component {
  render() {
    return (
      <div
        className='container hero base parallax__layer parallax__layer--base'
        onScroll={this.handleVideoScroll}
      >
        <div className='wrapper'>
          <div className='hero-copy'>
            <div>
              <h1>
                PDB <br /> Surfskates
              </h1>
              <p>
                Now you can develop your surfing skills in and out of the water.
                Improve your turns and learn to generate ...
              </p>
            </div>
          </div>
          <div className='video'>
            <div>
              <img src={image1} alt='logo' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
