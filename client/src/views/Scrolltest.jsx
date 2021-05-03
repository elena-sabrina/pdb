import React, { Component } from "react";
import "./../styles/main.scss";

class Scrolltest extends Component {
  state = {
    scrollTop: "1"
  };

  handleVideoScroll = (event) => {
    const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window
    const scrollTop = this.myRef.current.scrollTop;
    console.log(
      `onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`
    );
    this.setState({
      scrollTop: scrollTop
    });
  };

  render() {
    return (
      <div
        className='Scroll'
        ref={this.myRef}
        onScroll={this.handleVideoScroll}
      >
        <h1>hello</h1>
        <p>
          This demonstrates how to get the scrollTop position within a
          scrollable react component. ScrollTop is {this.state.scrollTop}
        </p>
        <p>
          This demonstrates how to get the scrollTop position within a
          scrollable react component. ScrollTop is {this.state.scrollTop}
        </p>
        <p>
          This demonstrates how to get the scrollTop position within a
          scrollable react component. ScrollTop is {this.state.scrollTop}
        </p>
        <p>
          This demonstrates how to get the scrollTop position within a
          scrollable react component. ScrollTop is {this.state.scrollTop}
        </p>
        <p>
          This demonstrates how to get the scrollTop position within a
          scrollable react component. ScrollTop is {this.state.scrollTop}
        </p>
        <p>
          This demonstrates how to get the scrollTop position within a
          scrollable react component. ScrollTop is {this.state.scrollTop}
        </p>
      </div>
    );
  }
}

export default Scrolltest;
