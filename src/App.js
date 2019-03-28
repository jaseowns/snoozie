/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;*/

import React from "react";
import './App.css';
import Home from './pages/Home';
import Splash from './pages/Splash';
import Alarms from './pages/Alarms';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
    <Router>
      <header className="App-header">
      <div>
        <Route exact path="/" component={Splash} />
        <Route path="/alarms" component={Alarms} />
        <Route path="/create" component={CreateAccount} />
        <Route path="/login" component={Login} />
      </div>
    </header>

    Debug menu:

    <ul>
          <li>
            <Link to="/">Splash</Link>
          </li>
          <li>
            <Link to="/Alarms">Alarms</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>          
          <li>
            <Link to="/create">CreateAccount</Link>
          </li>
        </ul>
        </Router>

    </div>
  );
}




export default App;

