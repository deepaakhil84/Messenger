import React, { Component } from "react";

export default class Messages extends Component {
  render() {
    return (
      <div className="container ">
        {this.props.messages.map(msg => {
          return (
            <div className=" message-bar  display-message p-2  ">
              <h6>{msg.senderName}</h6>
              <h5>{msg.message}</h5>
            </div>
          );
        })}
      </div>
    );
  }
}
