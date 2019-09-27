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
    console.log(result);
    if (result.status === 200) {
      login(result.data.token);
    }
  };

  render() {
    return (
      <div className="container">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <h1 className="mb-4 font-weight-light justify-content-center">
              Account Login
            </h1>
          </div>
          <div className="form-group">
            <label>USERNAME</label>
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
            <label>PASSWORD</label>
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
