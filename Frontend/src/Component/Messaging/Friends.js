import React, { Component } from "react";

export default class Friends extends Component {
  render() {
    return (
      <div>
        {this.props.users.map((user, index) => {
          return <h4>{user.firstName}</h4>;
        })}
      </div>
    );
  }
}
