import React, { Component } from 'react';
//import './Content.css';
class Content extends Component {
  constructor(super) {
    super(props);
    this.state = {
      sendFrom:"",
      receiveFrom:""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
}
handleInputChange(event) {
this.setState({event.target.name : event.target.value})
}

  render() {
    return (
     <div id="Content">
     <form id="SendParcel" method="POST">
         <label>From<input required type="text" name ="sendFrom" onChange={this.handleInputChange}/></label>
         <label>To<input required type="text"/></label>
         <div>    </div>
         <button formaction="getCode()">Get Code</button>
         <button formaction="sendParcel()">Submit</button>
       </form>
        <form id="ReceiveParcel" method="POST">
            <label>From<input required type="text" name ="receiveFrom" onChange={this.handleInputChange}/></label>
            <label>To<input required type="text"/></label>
            <div>    </div>
            <button formaction="getCode()">Get Code</button>
            <button formaction="receiveParcel()">Submit</button>
          </form>
      </div>
    );
  }
}

export default Content;
