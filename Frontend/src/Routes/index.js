import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Userform from "../Component/Userform";
import Messaging from "../Component/Messaging";
import Home from "../Home";
class index extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/message" component={Messaging} />
        <Route exact path="/userform" component={Userform} />
      </Switch>
    );
  }
}

export default index;
