import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "../Component/Login";
import { loggedIn } from "../Auth";
class Home extends Component {
  render() {
    if (!loggedIn()) {
      return (
        <div className="container">
          <Login />
        </div>
      );
    } else {
      return (
        <div className="container">
          <h1>Welcome to my App</h1>
          <div className="home-buttons">
            <Link className="btn btn-primary" to="/Message">
              Messaging
            </Link>
            <Link className="btn btn-primary" to="/Userform">
              Userform
            </Link>
          </div>
        </div>
      );
    }
  }
}
export default Home;
