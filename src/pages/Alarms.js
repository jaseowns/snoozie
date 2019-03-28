import React from "react";
import logo from '../images/logo.svg';
import Alarm from './Alarm';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Alarms({ match }) {

  return (
    <div>
      <h2>List of alarms will go here</h2>
      <ul>
        <li>
          <Link to={`${match.url}/1`}>Alarm 1</Link>
        </li>
        <li>
          <Link to={`${match.url}/2`}>Alarm 2</Link>
        </li>
        <li>
          <Link to={`${match.url}/3`}>Alarm 3</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:alarmId`} component={Alarm} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Choose an alarm</h3>}
      />
    </div>
  );

    // return (
    //  <div>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //     </p>
    //     <a
    //       className="App-link"
    //       href="/alarms"
    //     >
    //         Edit
    //     </a>
    //     &nbsp;|&nbsp;
    //     <a
    //       className="App-link"
    //       href="/alarms"
    //     >
    //         Add
    //     </a>        
    //     </div>
    // );
  }

export default Alarms;

