import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes/index";
import NavBar from "./Component/NavBar";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
