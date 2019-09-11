import React, { Component } from "react";
import axios from "axios";

class Userform extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { firstName, lastName, email } = this.state;
    const result = await axios.post("http://localhost:3001/user", {
      firstName,
      lastName,
      email
    });
    console.log(result);
  };

  render() {
    return (
      <div className="container">
        <form className="registration-form" onSubmit={this.handleSubmit}>
          <h1 className="text-center">USER FORM</h1>
          <div className="form-group">
            <td>FirstName</td>
            <input
              type="text"
              name="firstName"
              className="form-control "
              placeholder="Enter Firstname"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <td>LastName</td>

            <input
              type="text"
              name="lastName"
              className="form-control "
              placeholder="Enter lastname"
              value={this.state.lastname}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <td>Email</td>
            <input
              type="email"
              name="email"
              className="form-control "
              placeholder="Enter your email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <td>Password</td>
            <input
              type="password"
              name="password"
              className="form-control "
              placeholder="Enter your password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group d-flex justify-content-center">
            <button type="submit" class="btn btn-success">
              Submit{" "}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Userform;
