import React from "react";
import logo from '../images/logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Alarm({ match }) {
    return (
      <div>
        <h3>{match.params.alarmId}</h3>
      </div>
    );
  }

export default Alarm;