import React, { Component } from "react";
import "./../styles/main.scss";
import image1 from "./../styles/images/scrollvideo/image1.png";
import testvideo from "./../styles/images/scrollvideo/testvideo.mp4";

class Scrolltest extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      scrollTop: "1"
    };
  }

  handleVideoMounted = (video) => {
    console.log("handleVideoMounted mounted");
    if (video !== null) {
      video.currentTime = this.state.scrollTop;
    }
    console.log("video", video);
  };

  handleVideoScroll = (event) => {
    const scrollTop = this.myRef.current.scrollTop / 100;
    console.log(` ${scrollTop}`);
    this.setState({
      scrollTop: scrollTop
    });
    this.RemountVideo();
  };

  RemountVideo = () => {
    let video = document.getElementById("video");
    this.handleVideoMounted(video);
  };

  render() {
    return (
      <div
        className='Scroll'
        ref={this.myRef}
        onScroll={this.handleVideoScroll}
      >
        <h1>hello</h1>

        <video
          width='1200'
          height='300'
          loop
          muted
          id='video'
          src={testvideo}
          ref={this.handleVideoMounted}
        />
        <p>
          This demonstrates how to get the scrollTop position within a
          scrollable react component. ScrollTop is {this.state.scrollTop}
        </p>

        <div className='video intro'>
          {(this.state.scrollTop === "1" && (
            <img src={image1} alt='logo' />
          )) || <p> image not found</p>}
        </div>
      </div>
    );
  }
}

export default Scrolltest;
