import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Landing from './Landing';
import Ticket from './Ticket';
import AmbIn from './AmbIn';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact={true} path="/" component={Landing} />
            <Route path="/ticket" component={Ticket} />
            <Route path="/ambin" component={AmbIn} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
