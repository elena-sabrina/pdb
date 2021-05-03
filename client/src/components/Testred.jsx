import React, { Component } from "react";

import "./Test.scss";

class Footer extends Component {
  render() {
    return (
      <div class='parallax'>
        <div class='parallax__group'>
          <div className='base parallax__layer parallax__layer--base'>
            <h1>Red</h1>
          </div>
          <div className='back parallax__layer parallax__layer--back'>
            <h1>Blue</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
