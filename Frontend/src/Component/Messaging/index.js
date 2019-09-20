import React, { Component } from "react";
import axios from "axios";
import Form from "./Form";
import Messages from "./Messages";
import Profilebar from "./Profilebar";
import Friends from "./Friends";

class Messagin extends Component {
  state = {
    id: 1,
    message: "",
    messages: [],
    users: []
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
    this.getUsers();
  }

  getUsers = async () => {
    const response = await axios.get("http://localhost:3001/users");
    const users = response.data.users;
    this.setState({
      users
    });
  };
  getMessage = async () => {
    const response = await axios.get("http://localhost:3001/messages");
    const messages = response.data.messages;
    this.setState({
      messages
    });
    console.log(response);
  };

  render() {
    const { messages, users, message } = this.state;

    return (
      <div className="container ">
      <div className="messages-container">
        <div className="test">
          <Profilebar />
        </div>
        <div className="messages-sidebar ">
          <Friends users={users} />
        </div>
        <div className="main-messagebar  ">
          
         <Messages messages={messages} />
          <Form
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            message={message}
          />
        </div>
      </div>
      </div>
    );
  }
}

export default Messagin;
