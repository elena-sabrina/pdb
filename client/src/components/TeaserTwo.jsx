import React, { Component } from "react";

import "./TeaserTwo.scss";

class TeaserTwo extends Component {
  render() {
    return (
      <div className='container'>
        <div className='wrapper'>
          <div className='title'>
            <div>
              <h2>Models</h2>
            </div>
          </div>
          <div className='teaser-one'>
            <div>
              <h4>ECHO</h4>
              <p>
                Our hybrid surf and skate truck. Enhanced pumping and turning
                while maintaining a more traditional skating feel.
              </p>
            </div>
          </div>

          <div className='teaser-two'>
            <h4>ULU</h4>

            <p>
              Our advanced model that provides the most surf-like feeling
              available. Develop aggressive turns and cut backs.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default TeaserTwo;
