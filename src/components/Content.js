import React, { Component } from 'react';
//import './Content.css';
import SendParcel from './SendParcel';
import ReceiveParcel from './ReceiveParcel';
class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sendFrom: "",
      receiveFrom: ""
      <input name='sendFrom' onChange={ event => this.handleChange} />
      <input name='receiveFrom' onChange={ event => this.handleChange} />
      handleChange (event) {
  this.setState( [event.target.name]: event.target.value )
}
   };

  }
  render() {
    return (
     <div id="Content">
        <SendParcel/>
        <ReceiveParcel/>
      </div>
    );
  }
}

export default Content;
