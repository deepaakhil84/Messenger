import React, { Component } from "react";

export default class Friends extends Component {
  render() {
    return (
      <div className="container">
        {this.props.users &&
          this.props.users.map((user, index) => {
            if (this.props.user._id === user._id) {
              return (
                <button
                  onClick={() =>
                    this.props.displayMessage(user._id, this.props.user._id)
                  }
                  className="col"
                  justify-content="between"
                >
                  Saved Messages
                </button>
              );
            } else {
              return (
                <button
                  onClick={() =>
                    this.props.displayMessage(user._id, this.props.user._id)
                  }
                  className="col"
                  justify-content="between"
                >
                  {user.firstName} {user.lastName}
                </button>
              );
            }
          })}
      </div>
    );
  }
}
