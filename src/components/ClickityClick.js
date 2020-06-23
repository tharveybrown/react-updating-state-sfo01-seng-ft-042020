// Code ClickityClick Component Here
import React, {Component} from 'react';

class ClickityClick extends Component {

  constructor() {
    super()
    this.state = {
      hasBeenClicked: false,
      numberOfClicks: 0,
    }
  }

  handleClick = () => {
    this.setState(previousState => {
      return {
        hasBeenClicked: !previousState.hasBeenClicked,
        numberOfClicks: previousState.numberOfClicks + 1
      }
    }, () => console.log(this.state.numberOfClicks))
  }

  render () {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={ this.handleClick }>Click me!</button>
      </div>
    )
  }
}

export default ClickityClick;