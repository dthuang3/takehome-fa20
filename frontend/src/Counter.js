import React, { Component } from 'react'

class Counter extends Component {
  // YOUR CODE GOES BELOW
  constructor(props) {
    super(props)
    this.state = {
      count : props.count
    }
  }

  handleIncrement = () => {
    this.setState((prevState) => ({count: prevState.count + 1}));
  }

  handleDecrement = () => {
    this.setState((prevState) => ({count: prevState.count - 1}));
  }

  
  render() {
    return (
      <div> 
        <button onClick={this.handleDecrement}>-</button>
        {this.state.count}
        <button onClick={this.handleIncrement}>+</button>
      </div>
    )
  }
}

export default Counter
