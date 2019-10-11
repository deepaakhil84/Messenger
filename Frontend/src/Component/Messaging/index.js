import React, { Component } from "react";
import axios from "axios";
import Form from "./Form";
import Messages from "./Messages";
import Profilebar from "./Profilebar";
import Friends from "./Friends";
import { getProfile, loggedIn } from "../../Auth";

class Messagin extends Component {
  state = {
    id: 1,
    message: "",
    messages: [],
    users: [],
    user: {}
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

    const messages = result.data.messages; //displayed updated message(included the text posted)
    this.setState({
      message: "", //clear the text box after submit a message
      messages
    });
  };
  componentWillMount() {
    this.getUsers();
    /* To get the user from the decoded function create import function getProfile()
    create an object (user)
    intialize the value inside the user.
    Send it as props to another component(profilebar)
 */
    this.setState({
      user: getProfile() //
    });
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
      //google axious get request with id

      messages
    });
  };
  //to do creat fumction
  displayMessage = receiverId => {
    console.log(receiverId);
    this.getMessage();
  };

  render() {
    const { messages, users, message, user } = this.state;

    return (
      <div className="container ">
        <div className="messages-container">
          <div className="test">
            {/* send decoded user as props to profilebar */}
            {user && <Profilebar user={user} />}
          </div>
          <div className="messages-sidebar">
            {loggedIn() && (
              <Friends
                users={users}
                user={user}
                displayMessage={this.displayMessage}
              />
            )}
          </div>
          <div className="main-messagebar  ">
            <Messages messages={messages} />
            {loggedIn() && (
              <Form
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                message={message}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Messagin;
