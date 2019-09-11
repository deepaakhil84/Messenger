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
      <div className="userform-container mt-5 shadow d-flex justify-content-center">
        <form className="userform" onSubmit={this.handleSubmit}>
          <table class="table">
            <h1 className="mb-5 font-weight-light">USER FORM</h1>
            <tr>
              <div className="d-flex flex-row justify-content-around">
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
            </tr>
            <tr>
              <div className="d-flex flex-row justify-content-between">
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
            </tr>
            <tr>
              <div className="d-flex flex-row justify-content-between">
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
            </tr>
            <tr>
              <div className="d-flex flex-row justify-content-between">
                <td>password</td>
                <input
                  type="password"
                  name="password"
                  className="form-control "
                  placeholder="Enter your password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
            </tr>
            <div className="form-group d-flex justify-content-center">
              <button type="submit" class="btn btn-success">
                Submit{" "}
              </button>
            </div>
          </table>
        </form>
      </div>
    );
  }
}

export default Userform;
