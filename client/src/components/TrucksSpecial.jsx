import React, { Component } from "react";
import truckplaceholder from "./../styles/images/truckplaceholder.png";
import "./TrucksSpecial.scss";

class TrucksSpecial extends Component {
  render() {
    return (
      <div className='container'>
        <div className='wrapper'>
          <div className='title'>
            <h2>Trucks</h2>
          </div>

          <div className='teaser-video'>
            <img src={truckplaceholder} alt='logo' />
          </div>
        </div>
      </div>
    );
  }
}

export default TrucksSpecial;
