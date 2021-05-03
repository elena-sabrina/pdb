import React, { Component } from "react";

import Hero from "./../components/Hero";
import BlackCenter from "./../components/BlackCenter";
import TrucksSpecial from "./../components/TrucksSpecial";
import TeaserTwo from "./../components/TeaserTwo";
import Slider from "../components/Slider";
import TeaserButton from "../components/TeaserButton";

import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div>
        <div class='parallax'>
          <div class='parallax__group'>
            <Hero />
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
