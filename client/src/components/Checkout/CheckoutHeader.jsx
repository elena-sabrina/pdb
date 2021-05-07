import React, { Component } from "react";

import "./../Product/Header.scss";

class CheckoutHeader extends Component {
  render() {
    return (
      <div className='container header '>
        <div className='wrapper'>
          <div className='header-copy'>
            <div>
              <h1>Checkout</h1>
              <p>
                Blaa..Now you can develop your surfing skills in and out of the
                water. Improve your turns and learn to generate ...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutHeader;
