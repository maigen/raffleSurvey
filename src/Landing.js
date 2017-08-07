import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div>
        <h3>Epicodus Alumni</h3>
        <h5>Get Your Raffle Ticket</h5>
        <div>
          <label>Name</label>
          <input required="required"></input>
        </div>
        <div>
          <label></label>
          <textarea rows="5" cols="30" maxLength="1000" required="required"></textarea>
        </div>
      </div>
    )
  }
}

export default Landing;