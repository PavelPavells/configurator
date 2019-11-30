import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main/Main";
import Turnstille from "./components/Turnstille/Turnstille";
import Barrier from "./components/Barrier/Barrier";
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper-configurator">
          <Switch>
            <Route exact path="/main" component={Main} />
            <Route exact path="/turnstille" component={Turnstille} />
            <Route exact path="/barrier" component={Barrier} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
