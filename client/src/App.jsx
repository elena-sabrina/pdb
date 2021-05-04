import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/main.css";

import "./App.scss";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Product from "./views/Product";
import Scrolltest from "./views/Scrolltest";

export class App extends Component {
 /* constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      scrollTop: "1"
    };
  }

  handleVideoScroll = (event) => {
    const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window
    const scrollX = window.scrollX;
    //const scrollRef = this.myRef.current;
    const scrollTop = this.myRef.current.focus;
    console.log(` ${scrollY}-${scrollX}-${scrollTop}`);
    this.setState({
      scrollTop: scrollTop
    });
  };*/
  render() {
    return (
      <BrowserRouter className='App'>
        <
        >
          <Navbar />

          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/product' component={Product} exact />
            <Route path='/scrolltest' component={Scrolltest} exact />
          </Switch>

          <Footer />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
