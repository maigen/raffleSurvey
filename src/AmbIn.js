import React, { Component } from 'react';

class AmbIn extends Component {
  render() {
    return (
      <div>
        <h3>Amber's Admin</h3>
        <button>Draw A Winning Number</button>
        <h1></h1>
        
        <div>
          <form>
            <label>Get Responses</label>
            <p>
              <input name="responses" type="radio" />
              Question One:
            </p>
            <p>
              <input name="responses" type="radio" />
              Question Two:
            </p>
            <p>
              <input name="responses" type="radio" />
              Question Three:
            </p>
          </form>
          
          <ul>Survey Says:</ul>
        </div>
      </div>
    )
  }
}

export default AmbIn;