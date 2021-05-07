import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./TeaserButton.scss";

class TeaserButton extends Component {
  render() {
    return (
      <div className='container'>
        <div className='wrapper TeaserButton'>
          <div>
            <button>
              <Link to='/product' className='Link'>
                Buy now
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TeaserButton;
