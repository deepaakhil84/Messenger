import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <form className="message-form mt-5">
        <div className="form-group messaging-input">
          <input
            type="text"
            name="message"
            className="form-control "
            placeholder="Add a message"
            value={this.props.message}
            onChange={this.props.handleChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-success form-control messaging-submitbutton"
          onClick={this.props.handleSubmit}
        >
          Submit
        </button>
      </form>
    );
  }
}
