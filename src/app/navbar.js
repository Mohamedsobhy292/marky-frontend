import React, { Component } from 'react';
import logo from '../assets/img/logo.svg';

export default class  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }
  render() {
    const {loggedIn} = this.state.loggedIn;
    return (
      <nav className="main-nav">
          <ul className="main-nav__list left-list">
            <li className="main-nav__link">Boards</li>
          </ul>
          <div className="main-nav__list">
            <img src={logo} alt="" height="50" />
          </div>
          {loggedIn ?
          <ul className="main-nav__list right-list">
            <li className="main-nav__link">Mohamed Sobhy</li>
            <li className="main-nav__link">
              <button className="primary-btn">New</button>
            </li>
          </ul>:
          <ul className="main-nav__list right-list">
            <li className="main-nav__link">Sign Up</li>
            <li className="main-nav__link">
              <button className="primary-btn">Login</button>
            </li>
          </ul>
          }
      </nav>
    );
  }
}
