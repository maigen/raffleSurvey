import React, { Component } from 'react';

class Ticket extends Component {
  render() {
    return (
      <div>
        <h3>Your Ticket</h3>
        <h1>631423</h1>
        <form>
          <h5>Answer Our Other Questions, Too?</h5>
          <div>
            <label></label>
            <textarea rows="5" cols="30" maxLength="1000" required="required"/>
          </div>
          <div>
            <label></label>
            <textarea rows="5" cols="30" maxLength="1000" required="required"/>
          </div>
        </form>
      </div>
    )
  }
}

export default Ticket;