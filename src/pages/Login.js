import React from "react";
import logo from '../images/logo.svg';

function Login() {
    return (
     <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Login Page
        </p>
        <a
          className="App-link"
          href="/alarms"
        >
          View Alarms
        </a>
        </div>
    );
  }

export default Login;