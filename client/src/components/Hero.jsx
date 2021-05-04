import React, { Component } from "react";


import image1 from "./../styles/images/scrollvideo/image1.png";
import "./Hero.scss";
import "./HeroAnimations.scss";

class Hero extends Component {
  state = {
    scrollpos: ""
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

  /*handleScroll(update, event) {
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
  }*/

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
          <div className='video intro'>
            <img src={image1} alt='logo' />
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
