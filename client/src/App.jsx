import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/main.css";

import "./App.scss";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Product from "./views/Product";

export class App extends Component {
  render() {
    return (
      <BrowserRouter className='App'>
        <>
          <Navbar />

          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/product' component={Product} exact />
          </Switch>

          <Footer />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
