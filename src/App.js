import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Landing from './Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact={true} path="/" component={Landing} />
        </Router>
      </div>
    );
  }
}

export default App;
