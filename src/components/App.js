import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
class App extends Component {
  render() {
    return (
  <div id="container">
    <Header/>
    <Content/>
    </div>
    );
  }
}
export default App;