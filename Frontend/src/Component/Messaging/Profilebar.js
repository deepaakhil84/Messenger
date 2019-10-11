import React, { Component } from "react";
import axios from "axios";

export default class ProfileBar extends Component {
  state = {
    showProfile: false,
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    msg: ""
  };
  componentWillMount() {
    const { user } = this.props;
    this.setState({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      _id: user._id
    });
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleUpdate = async e => {
    e.preventDefault();
    const { firstName, lastName, email, password, _id } = this.state;
    const result = await axios.put(`http://localhost:3001/user/${_id}`, {
      firstName,
      lastName,
      email,
      password
    });
    if (result.status === 200) {
      this.setState({
        msg: "Your details are successfully updated"
      });
    }
  };
  handleClick = () => {
    const { showProfile } = this.state;
    this.setState({
      showProfile: !showProfile
    });
  };
  render() {
    const { msg } = this.state;
    if (msg) {
      return (
        <div className="container">
          <h4>{msg}</h4>
        </div>
      );
    }

    const { user } = this.props;
    console.log(user);
    return (
      <div>
        {/* received and displayed from decoded user */}
        <span onClick={this.handleClick}>{user.firstName}</span>
        {/* To do - show your profile click on your name - edit profile should be available. */}
        {this.state.showProfile && (
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                className="form-control "
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                className="form-control "
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control "
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                className="form-control "
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group d-flex justify-content-center">
              <button
                onClick={this.handleUpdate}
                type="submit"
                class="btn btn-success"
              >
                Update{" "}
              </button>
            </div>
          </form>
        )}
      </div>
    );
  }
}
