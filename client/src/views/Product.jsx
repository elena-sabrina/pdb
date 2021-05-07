import React, { Component } from "react";

import Header from "../components/Product/Header";
import ChooseType from "../components/Product/ChooseType";
import ChooseWheels from "../components/Product/ChooseWheels";
import Summary from "../components/Product/Summary";
import Order from "../components/Product/Order";

//import "./Home.scss";

class Product extends Component {
  render() {
    return (
      <div>
        <Header />
        <ChooseType />
        <ChooseWheels />
        <Summary />
        <Order />
      </div>
    );
  }
}

export default Product;
