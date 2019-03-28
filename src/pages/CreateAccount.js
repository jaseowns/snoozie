import React from "react";
import logo from '../images/logo.svg';

function CreateAccount() {
    return (
     <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        CreateAccount
        </p>
        <a
          className="App-link"
          href="/login"
        >
          Login
        </a>
        </div>
    );
  }

export default CreateAccount;