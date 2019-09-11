import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "../Component/Login";
import { loggedIn } from "../Auth";
class Home extends Component {
  render() {
    if (!loggedIn()) {
      return <Login />;
    } else {
      return (
        <div className="container">
          <div className="home-container">
            <h1>Welcome to my App</h1>
            <div className="home-buttons">
              <Link className="btn btn-primary" to="/Message">
                Messaging
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default Home;
