import React, { Component } from "react";
import { Link } from 'react-router';

export default class Navigation extends Component {
  render() {
    return (
      <div className="frame bit-1 navigation_container">
        <h3 className="bit-40">Journey into React</h3>
        <ul className="bit-60 nav_menu nav">
          <li key={100}><Link to="dashboard">Dashboard</Link></li>
          <li key={101}><Link to="login">Login</Link></li>
        </ul>
      </div>
    );
  }
}
