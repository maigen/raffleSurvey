import React, { Component } from 'react';

class Landing extends Component {
  render() {
    let btnTxt = "Get My Number";
    return (
      <div>
        <h3>Epicodus Alumni</h3>
        <h5>Get Your Raffle Ticket</h5>
        <form>
          <div>
            <label>Name</label>
            <input type="text" required="required" />
          </div>
          <div>
            <p>
              <input name="useCase" type="radio" checked/>
              I Want To Answer A Survey Question
            </p>
            <p>
              <input name="useCase" type="radio" />
              I Just Need To Get My Ticket Number
            </p>
          </div>
          <div>
            <label></label>
            <textarea rows="5" cols="30" maxLength="1000" required="required"/>
          </div>
          <button>{btnTxt}</button>
        </form>
      </div>
    )
  }
}

export default Landing;