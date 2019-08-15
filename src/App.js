import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
count: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  //prevState is the old version of state, and an object
  handleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
        // wouldn't use prevState.count++ because that DIRECTLY modifies the state
      }
    })
  }

  /*
   this.handleClick = this.handleClick.bind(this);
   // BINDING- makes sure handleclick method is bound to context of THIS as it exists in the APP class
  handleClick() {
    this.setState({ count: 1 });
  }

Method A: pass an object, good if the previous state does NOT matter

  */

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
    </div>
  )
}


}

export default App;
