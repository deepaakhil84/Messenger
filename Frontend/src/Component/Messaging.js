import React, { Component } from "react";
import axios from "axios";
class Messagin extends Component {
  state = {
    id: 1,
    message: "hai"
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async () => {
    const { message } = this.state;
    const result = await axios.post("http://localhost:3001/message", {
      message
    });
    console.log(result);
  };
  render() {
    return (
      <div className="container">
        <form className="message-form">
          <div className="form-group">
            <label>Enter your message</label>
            <input
              type="text"
              name="message"
              className="form-control mr-2"
              placeholder="Add a message"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </div>{" "}
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-success "
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Messagin;
