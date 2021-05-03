import React, { Component } from "react";

import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className='container footer'>
        <div className='wrapper'>
          <div className='adress'>
            <div>
              <h5>PDB Surfskates</h5>
              <p>
                711-2880 Nulla St.
                <br />
                Mankato Mississippi 96522
                <br />
                (257) 563-7401
              </p>
              <br />
              <p>hello@pdbsurskates.com</p>
            </div>
          </div>
          <div className='about'>
            <h5>About us</h5>
            <p className='p-adding-line-height'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus sunt iure.
            </p>
            <div className='links'>
              <p>Link</p>
              <p>Link</p>
              <p>Link</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
