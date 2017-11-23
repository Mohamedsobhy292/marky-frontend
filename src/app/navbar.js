import React from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/img/logo.svg';

const Navbar = ({loggedIn, userName}) => {
  function userArea() {
    if (loggedIn) {
      return (
        <ul className="main-nav__list right-list">
          <li className="main-nav__link user-name">
            <img src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg" className="user-img" alt="userPic" />
            <span className="user-title">{userName}</span>
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
        <li className="main-nav__link">
          <button className="primary-btn">Sign Up</button>
        </li>
      </ul>
    );
  }
  return (
    <nav className="main-nav">
      <ul className="main-nav__list left-list">
        {loggedIn ?
          <li className="main-nav__link">Boards</li> : <li className="main-nav__link">Sign Up</li>
        }
      </ul>
      <div className="main-nav__list logo-container">
        <img src={logo} alt="" height="50" />
      </div>
      {userArea()}
    </nav>
  );
};

Navbar.defaultProps = {
  userName: 'Stranger',
};

Navbar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  userName: PropTypes.string,
};

export default Navbar;
