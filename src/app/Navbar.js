import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import logo from '../assets/img/logo.svg';


class Navbar extends Component {
  userArea() {
    if (this.props.user.isAuthenticated) {
      return (
        <ul className="main-nav__list right-list">
          <li className="main-nav__link user-name">
            <img src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg" className="user-img" alt="userPic" />
            <span className="user-title">{this.props.user.name}</span>
          </li>
          <li className="main-nav__link">
            <button className="primary-btn">New</button>
          </li>
        </ul>
      );
    }
    return (
      <ul className="main-nav__list right-list">
        <li className="main-nav__link">Login</li>
        <li className="main-nav__link sign-up-btn">
          <button className="primary-btn">Sign Up</button>
        </li>
      </ul>
    );
  }
  render() {
    const {isAuthenticated} = this.props.user;
    return (
      <nav className="main-nav">
        <ul className="main-nav__list left-list">
          {isAuthenticated ?
            <li className="main-nav__link">Boards</li> : <li className="main-nav__link">Sign Up</li>
          }
        </ul>
        <div className="main-nav__list logo-container">
          <img src={logo} alt="" height="50" />
        </div>
        {this.userArea()}
      </nav>
    );
  }
}

Navbar.defaultProps = {
  user: {
    name: 'Stranger',
  },
};

Navbar.propTypes = {
  user: PropTypes.objectOf(PropTypes.any),
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = store => (
  {
    user: store.user,
  }
);

export default connect(mapStateToProps)(Navbar);

