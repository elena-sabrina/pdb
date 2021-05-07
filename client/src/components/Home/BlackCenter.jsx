import React, { Component } from "react";

import "./BlackCenter.scss";
import "./../../views/Home.scss";

class BlackCenter extends Component {
  render() {
    return (
      <div className='container blackbox back parallax__layer parallax__layer--back'>
        <div className='wrapper'>
          <div className='blackbox-content'>
            <h5>Skate your wave.</h5>
            <h4>
              We design your pdb surfskate to emulate your surf. Improve. Get
              that infinite riding thrill.
              <h5>Improve your surf.</h5>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default BlackCenter;
