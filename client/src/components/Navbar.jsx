import React, { Component } from "react";
import { Link } from "react-router-dom";
import logoscreenshot from "./../styles/images/logoscreenshot.png";
import "./Navbar.scss";
import "./NavbarAnimations.scss";

class Navbar extends Component {
  render() {
    return (
      <div className='Nav'>
        <div className='Navbar'>
          <Link to='/' className='Link'>
            <img className='logo' src={logoscreenshot} alt='logo' />
          </Link>

          <div className='hamburger' onClick={this.handleHamburgerClick}>
            <div className='line lineone'></div>
            <div className='line linetwo'></div>
            <div className='line linethree'></div>
          </div>
        </div>

        <div className='nav-links'>
          <div className='nav-wrapper'>
            <ul>
              <li>
                <Link to='/' className='Link'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/order' className='Link'>
                  Order
                </Link>
              </li>
              <li>
                <Link to='/contact' className='Link'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
