import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      number: 2
    }
    this.handleClick = this.handleClick.bind(this);
    this.clickDouble = this.clickDouble.bind(this);
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
  
  clickDouble() {
    this.setState(prevState => {
      return {
        number: prevState + 1
      }
    })
  }


  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
        <h1>{this.state.number}</h1>
        <button onClick={this.clickDouble}>Double</button>
    </div>
  )
  }
  /*
can pass state to other components also
< ChildComponent count = {this.state.count} />
this means ChildComp is receiving a prop called Count- the value of Count is the current state of its parent component (in this case App)
whenever React sees that a state has changed it will rerender to the children as well
*/

}

export default App;
