import React, { Component } from 'react';


class TodoList extends Component {
  constructor() {
    super();
    this.state = {number: [], elements: []};
    
  }

  addNumber = () => {
    var randomNum = Math.floor(Math.random() * 500);
    this.setState(r => 
      {return {
        number: r.number.concat(randomNum)}});
  }

  clicked = () => {
    
    this.setState(st => {return {elements:st.elements.concat(this.inp.value)}},
    () => {this.inp.value = "";})
  }

  reset = () => {
    this.setState({number: []})
    this.setState({elements: []})
  }
  

  render() {
    var makeLi = x => (<li>{x}</li>);
    return (<div>
      <input ref={r => this.inp = r}/>
      <button onClick={this.clicked}>press me</button>
      <button onClick={this.reset}>reset</button>
      <div className='App'>
        <ul>
          {this.state.number.map(makeLi)}
          {this.state.elements.map(makeLi)}
        </ul>
      </div>
      </div>
    )
    
  }
  
}

export default TodoList;
