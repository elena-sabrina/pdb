import React, { Component } from "react";

import Header from "../components/Product/Header";
import ChooseType from "../components/Product/ChooseType";
import ChooseWheels from "../components/Product/ChooseWheels";
import Summary from "../components/Product/Summary";
import Order from "../components/Product/Order";

//import "./Home.scss";

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      surfskate: "asdf"
    };
  }

  render() {
    return (
      <div>
        <Header />
        <ChooseType
          type={this.props.type}
          onTypeHasChanged={this.props.onTypeChange}
        />
        <ChooseWheels />
        <Summary />
        <Order />
      </div>
    );
  }
}

export default Product;
