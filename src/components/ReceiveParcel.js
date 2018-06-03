import React, { Component } from 'react';
class ReceiveParcel extends Component {
  render() {
    return (
      <form id="ReceiveParcel" method="POST">
          <label>From<input required type="text" name ="receiveFrom" /></label>
          <label>To<input required type="text"/></label>
          <div>    </div>
          <button formaction="getCode()">Get Code</button>
          <button formaction="receiveParcel()">Submit</button>
        </form>
    );
  }
}
export default ReceiveParcel;
