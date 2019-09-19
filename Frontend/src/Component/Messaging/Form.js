import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div>
        <form className="message-form mt-5 shadow p-3 mb-5 bg-white rounded">
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
            className="btn btn-success messaging-submitbutton"
            onClick={this.props.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
