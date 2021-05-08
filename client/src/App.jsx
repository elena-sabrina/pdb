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

    console.log("props A", this.props.new_surfskate, this.props.new_order);

    this.state = {
      new_surfskate: {
        type: null,
        type: null,
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
                  type={this.state.type}
                  onStatusChange={this.handleTypeChangeSubmission}
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
