import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {number: 0};
  }

  componentDidMount() {
    setInterval(() => this.setState({number: Math.floor(Math.random() * 1000)}), 1000)
  }

  render() {
    return this.state.number
  }
}

export default App;
