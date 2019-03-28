import React from "react";
import logo from '../images/logo.svg';

function Splash() {
    return (
     <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Splash Page about why this is cool
        </p>
        <a
          className="App-link"
          href="/create"
        >
          Create An Account
        </a>
        </div>
    );
  }

export default Splash;