import React, { Component } from "react";

export default class Profilebar extends Component {
  render() {
    return (
      <div>
        {/* received and displayed from decoded user */}
        <h2>Welcome to {this.props.user.firstName}'s Chat App</h2>
      </div>
    );
  }
}
