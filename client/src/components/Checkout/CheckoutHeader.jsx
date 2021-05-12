import React, { Component } from "react";

import "./../Product/Header.scss";

class CheckoutHeader extends Component {
  constructor(props) {
    super(props);
    console.log("checkoutheader props", this.props);
  }
  render() {
    const typeprops = this.props.type;

    const wheelprops = this.props.wheel;

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
              <h1>{typeprops}</h1>
              <h1>{wheelprops}</h1>
              <h1>{this.props.wheel}</h1>
              <h1>{this.props.wheel}</h1>
              <h1>blank</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutHeader;
