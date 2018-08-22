/*global firebase*/
import React, { Component } from 'react';

class Ticket extends Component {
  render() {
    const ticketNumber = this.getTicket() || 654321;
    
    return (
      <div className="ticket">
        <div className="header">
          <h1>Ticket for {this.props.userName}</h1>
          <p>{ticketNumber}</p>
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
  
  getTicket() {
    return null;
    // firebase.database()
    //   .ref('entities')
    //   .orderbyChild('name')
    //   .equalTo(this.props.userName)
    //   // .once('value')
    //   .then(function(snapshot) {
    //     return snapshot.val().ticket;
    //   })
  }
}

export default Ticket;
