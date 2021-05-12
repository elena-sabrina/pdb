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
      newsurfskate: {
        type: "none",
        wheel: "none",
        name: "",
        email: "",
        adress: ""
      }
    };
  }

  /*
  handleTypeChangeSubmission = async (type) => {
    console.log("App handeltypechangesub");

    this.setState({
      newsurfskate: {
        type: type
      }
    });
    console.log("App new state type", this.state.newsurfskate);
  };

  handleWheelChangeSubmission = async (wheel) => {
    console.log("App handlewheelchangesub");
    console.log(this.state.newsurfskate.type);

    this.setState({
      newsurfskate: {
        wheel: wheel
      }
    });

    console.log("App new state wheel", this.state.newsurfskate);
  };*/

  handleConfigureChangeSubmission = async (
    type,
    wheel,
    name,
    email,
    adress
  ) => {
    this.setState({
      newsurfskate: {
        type: type,
        wheel: wheel,
        name: name,
        email: email,
        adress: adress
      }
    });
    console.log("App new state configure", this.state.newsurfskate);
    window.location.href = `/product/confirmation/${type}/${wheel}/${name}/${email}/${adress}`;
  };

  render() {
    return (
      <BrowserRouter className='App'>
        <>
          <Navbar />

          <Switch>
            <Route path='/' component={Home} exact />
            <Route
              path='/product'
              render={(props) => (
                <Product
                  {...props}
                  type={this.state.newsurfskate.type}
                  wheel={this.state.newsurfskate.wheel}
                  name={this.state.newsurfskate.name}
                  adress={this.state.newsurfskate.adress}
                  email={this.state.newsurfskate.email}
                  onConfigureChange={this.handleConfigureChangeSubmission}
                />
              )}
              exact
            />
            <Route
              path='/product/checkout'
              render={(props) => (
                <Checkout
                  {...props}
                  surfskate={this.state.newsurfskate}
                  message={"surprise surprise"}
                />
              )}
              exact
            />
            <Route
              path='/product/checkout/confirmation'
              component={Confirmation}
              exact
            />
            <Route
              path='/product/checkout/confirmation/:id/:id/:id/:id/:id'
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
