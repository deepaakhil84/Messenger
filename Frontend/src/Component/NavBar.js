import React from "react";
import { Link } from "react-router-dom";
import { loggedOut, loggedIn } from "../Auth";
function NavBar() {
  return (
    <nav className="navbar shadow navbar-expand-lg navbar-light bg-light">
      {/* <a className="navbar-brand d-inline" href="#"> */}
      <span className="d-inline p-2 text-color ">Messager</span>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="/">
            Home <span className="sr-only">(current)</span>
          </a>
          {loggedIn() && (
            <Link className="nav-item nav-link" to="/Message">
              Messaging
            </Link>
          )}
          {!loggedIn() && (
            <Link className="nav-item nav-link" to="/Userform">
              sign up
            </Link>
          )}
          {loggedIn() && (
            <span className="nav-item nav-link" onClick={() => loggedOut()}>
              log out
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
