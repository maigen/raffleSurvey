import React, { Component } from 'react';
// import { Jumbotron } from 'react-bootstrap';

class Ticket extends Component {
  render() {
    return (
      <div className="ticket">
        <div className="header">
          <h1>Your Ticket</h1>
          <p>631423</p>
        </div>
        <form className="extraForm">
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
