import React, { Component } from "react";
import axios from "axios";
class Messagin extends Component {
  state = {
    id: 1,
    message: "hai",
    messages: []
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
    //console.log(result);
  };
  componentWillMount() {
    this.getMessage();
  }
  getMessage = async () => {
    const response = await axios.get("http://localhost:3001/messages");
    const messages = response.data.messages;
    this.setState({
      messages
    });
    console.log(response);
  };
  render() {
    const { messages } = this.state;

    return (
      <div className="container">
        {messages.map(msg => {
          return <h5>{msg.message}</h5>;
        })}
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
