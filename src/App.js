import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Landing from './Landing';
import Ticket from './Ticket';
import AmbIn from './AmbIn';

class App extends Component {
  componentWillMount() {
    this.setState({
      userName: '',
      ticketNumber: ''
    })
  }
  
  render() {
    const questions = [
      "What presentation topics would you like at future EA Meet-Ups?",
      "Other than speakers and panels, what would you like to see at future EA Meet-Ups?",
      "What would motivate you to join a group hacking project?"
    ],
      allQuestions = JSON.parse(JSON.stringify(questions)),
      randNum = Math.floor(Math.random() * questions.length),
      firstQuest = String(questions.splice(randNum, 1));
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact={true} path="/" render={() => 
              <Landing question={firstQuest} saveDetails={this.saveDetails.bind(this)}/>
            }/>
            <Route path="/ticket" render={() =>
              <Ticket userName={this.state.userName} ticketNumber={this.state.ticketNumber}/>
            }/>
            <Route path="/ambin" render={() => 
              <AmbIn questions={allQuestions}/>
            }/>
          </div>
        </Router>
      </div>
    );
  }
  
  saveDetails(name, ticket) {
    this.setState(
      {userName: name, ticketNumber: ticket}
    )
  }
}

export default App;
