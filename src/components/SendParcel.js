import React, { Component } from 'react';
import './SendParcel.css';
class SendParcel extends Component {
  render() {
    return (
    <form id="SendParcel" method="POST">
        <label>From<input required type="text" name ="sendFrom" /></label>
        <label>To<input required type="text"/></label>
        <div>    </div>
        <button formaction="getCode()">Get Code</button>
        <button formaction="sendParcel()">Submit</button>
      </form>
    );
  }
}

export default SendParcel;
