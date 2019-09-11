import React, { Component } from "react";
import axios from "axios";
import { login } from "../Auth";
class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    const result = await axios.post("http://localhost:3001/login", {
      email,
      password
    });

    if (result.status === 200) {
      login();
    }
  };

  render() {
    return (
      <div className="login-container shadow  d-flex  align-items-center">
        <form
          className=" login-form  display-inline ml-auto"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <h1 className="mb-4 font-weight-light text-uppercase justify-content-center">
              Log in
            </h1>
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control mr-2 rounded-pill btn-lg"
              placeholder="Enter your email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control mr-2 rounded pill btn-lg"
              placeholder="Enter your password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-success">
              Log in{" "}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
