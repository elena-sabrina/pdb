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

   <Order type={this.props.type} wheel={this.props.wheel} />
        */

  render() {
    return (
      <div>
        <Header />
        <Configure
          type={this.props.type}
          wheel={this.props.wheel}
          name={this.props.name}
          adress={this.props.adress}
          email={this.props.email}
          onConfigureHasChanged={this.props.onConfigureChange}
        />
      </div>
    );
  }
}

export default Product;
