import React, { Component } from "react";

import "./../Product/Header.scss";

class ConfirmationHeader extends Component {
  render() {
    return (
      <div className='container header '>
        <div className='wrapper'>
          <div className='header-copy'>
            <div>
              <h1>Hey Hubby,</h1>
              <h4>We’ll get back to you via: hubbysurf@gmail.com</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfirmationHeader;
