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
                Your hybrid PDB. Enhance your pumping and turns with a classic
                skateboard feeling.
              </p>
            </div>
          </div>

          <div className='teaser-two'>
            <h4>ULU</h4>

            <p>
              Your advanced PDB. Perform radical turns and maneuvers with the
              most surf-like feeling.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default TeaserTwo;
