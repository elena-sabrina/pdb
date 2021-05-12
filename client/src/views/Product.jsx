import React, { Component } from "react";

import Header from "../components/Product/Header";
import Configure from "../components/Product/Configure";
import ChooseType from "../components/Product/ChooseType";
import ChooseWheels from "../components/Product/ChooseWheels";
import Summary from "../components/Product/Summary";
import Order from "../components/Product/Order";

//import "./Home.scss";

class Product extends Component {
  constructor(props) {
    super(props);
    console.log("product props", this.props);
    //this.state = {
    //  surfskate: "asdf"
    // };
  }

  /*

  <ChooseType
          type={this.props.type}
          onTypeHasChanged={this.props.onTypeChange}
        />
        <ChooseWheels
          wheel={this.props.wheel}
          onWheelHasChanged={this.props.onWheelChange}
        />*/

  render() {
    return (
      <div>
        <Header />
        <Configure
          type={this.props.type}
          onConfigureHasChanged={this.props.onConfigureChange}
          wheel={this.props.wheel}
        />

        <Order type={this.props.type} wheel={this.props.wheel} />
      </div>
    );
  }
}

export default Product;
