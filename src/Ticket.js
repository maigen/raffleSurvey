/*global firebase*/
import React, { Component } from 'react';

class Ticket extends Component {
  render() {
    const ticketNumber = this.getTicket() || 654321;
    // const ticketNumber = this.props.ticketNumber || this.getTicket()
        
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
    // TODO: why getting called TWICE!?
    firebase.database()
      .ref('entries')
      .orderByChild('name')
      .equalTo('xxy')  //JUST FOR NOW
      // .equalTo(this.props.userName);
      .once('value').then(snapshot => {
      if (snapshot != null) {
        const userData = snapshot.val();
        const userDataRef = Object.keys(userData)[0];
        const ticket = userData[userDataRef].ticket
        console.log('snapshot value: ', ticket);
        return ticket;
      };
      return 'No ticket found';
    });
  }
}

export default Ticket;
