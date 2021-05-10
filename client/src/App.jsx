import React, { Component } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/main.css";

import "./App.scss";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Product from "./views/Product";
import Checkout from "./views/Checkout";
import Confirmation from "./views/Confirmation";
import About from "./views/About";
import Contact from "./views/Contact";
import Scrolltest from "./views/Scrolltest";

export class App extends Component {
  constructor(props) {
    super(props);

    console.log("App props", this.props);

    this.state = {
      new_surfskate: {
        type: null,
        type_price: null,
        wheels: null,
        wheels_price: null
      },
      new_order: {
        surfskates: [],
        price: null,
        client: null,
        adress: null,
        email: null
      }
    };
  }

  handleTypeChangeSubmission = async ({ type }) => {
    console.log("lifting up B running");
    console.log("type", type);
    this.setState({
      new_surfskate: {
        type: type
      }
    });
    console.log(this.state.new_surfskate);
    //this.loadDare();
  };

  handleWheelChangeSubmission = async ({ wheel }) => {
    console.log("lifting up B running");
    console.log("wheel", wheel);
    this.setState({
      new_surfskate: {
        wheel: wheel
      }
    });
    console.log(this.state.new_surfskate);
    //this.loadDare();
  };

  render() {
    const { type } = this.state.new_surfskate;
    return (
      <BrowserRouter className='App'>
        <>
          <Navbar />
          <p> type: {type}</p>

          <Switch>
            <Route path='/' component={Home} exact />
            <Route
              path='/product'
              render={(props) => (
                <Product
                  {...props}
                  type={this.state.new_surfskate.type}
                  wheel={this.state.new_surfskate.wheel}
                  message={"hello"}
                  onTypeChange={this.handleTypeChangeSubmission}
                  onWheelChange={this.handleWheelChangeSubmission}
                />
              )}
              exact
            />
            <Route path='/product/checkout' component={Checkout} exact />
            <Route
              path='/product/checkout/confirmation'
              component={Confirmation}
              exact
            />
            <Route path='/about' component={About} exact />
            <Route path='/contact' component={Contact} exact />
            <Route path='/scrolltest' component={Scrolltest} exact />
          </Switch>

          <Footer />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
