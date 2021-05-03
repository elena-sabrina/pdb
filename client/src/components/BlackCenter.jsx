import React, { Component } from "react";

import "./BlackCenter.scss";
import "./../views/Home.scss";

class BlackCenter extends Component {
  render() {
    return (
      <div className='container blackbox back parallax__layer parallax__layer--back'>
        <div className='wrapper'>
          <div className='blackbox-content'>
            <h5>simulate waves</h5>
            <h4>
              Our surfskates are designed to simulate the movements you make and
              the feeling you get while surfing.
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default BlackCenter;
