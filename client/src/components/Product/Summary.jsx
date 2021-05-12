import React, { Component } from "react";

import "./Summary.scss";

class Summary extends Component {
  constructor(props) {
    super(props);
    console.log("summary props:", this.props);
    //this.state = {
    //  surfskate: "asdf"
    // };
  }
  render() {
    const wheelprops = this.props.wheel;
    const typeprops = this.props.type;
    return (
      <div className='container'>
        <div className='wrapper'>
          <div className='summary-title'>
            <div>
              <h2>Summary</h2>
              
              <p>...</p>
            </div>
          </div>
          <div className='summary'>
            <table>
              <tr>
                <td>Type: {typeprops}</td>

                <td>200.000 IDR</td>
              </tr>
              <tr>
                <td>Wheels: {wheelprops}</td>

                <td>50.000 IDR</td>
              </tr>
              <hr />
              <tr>
                <td>Total</td>

                <td>250.000 IDR</td>
              </tr>
            </table>
            <div>
              <button>Add Order</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
