import React, { Component } from "react";

import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <div className='container header '>
        <div className='wrapper'>
          <div className='header-copy'>
            <div>
              <h1>
                Choose <br />
                your Surfskate
              </h1>
              <p>
                Jean.Now you can develop your surfing skills in and out of the
                water. Improve your turns and learn to generate. Jean.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
