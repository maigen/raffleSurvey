import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Landing from './Landing';
import Ticket from './Ticket';
import AmbIn from './AmbIn';

class App extends Component {
  render() {
    const questions = [
      "How do you prefer to React?",
      "What would you like to see at future React meet-ups?",
      "So...what's up with Jason Browne anyway?"
    ],
      randNum = Math.floor(Math.random() * questions.length),
      firstQuest = questions.splice(randNum, 1);
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact={true} path="/" render={() => 
              <Landing question={firstQuest}/>
            }/>
            <Route path="/ticket" component={Ticket}/>
            <Route path="/ambin" component={AmbIn}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
