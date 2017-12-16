/* global FB */
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import './User.scss';
import {logInAction} from './userActions';

const Login = ({logIn, history, loggedIn}) => {
  function facebookLogin(e) {
    e.preventDefault();
    FB.login((response) => {
      if (response.status === 'connected') {
        axios({
          method: 'post',
          url: 'http://localhost:4000/users/signin/facebook',
          data: {
            access_token: response.authResponse.accessToken,
          },
        }).then((res) => {
          FB.api('/me', { fields: 'id, name, email, picture' }, (fbdata) => {
            logIn(res.data.token, fbdata.name, fbdata.picture.data.url);
            history.push('/boards');
          });
        });
      }
    }, {scope: 'email, public_profile'});
  }
  if (loggedIn) {
    return (
      <Redirect to="/boards" />
    );
  }
  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <form className="login-form">
          <h1 className="login-form__title">Login to Your Account</h1>
          <p className="login-form__desc">
                Login to your account in order to view your saved links and boards or add new ones
          </p>
          <div className="form-group">
            <label className="login-form__label" htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="enter your email"
              className="login-form__field"
              id="email"
            />
          </div>
          <div className="form-group">
            <label className="login-form__label" htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="enter your password"
              className="login-form__field"
              id="password"
            />
          </div>
          <button className="primary-btn login-form__login-btn">Login</button>
          <div className="login-form__social-area">
            <h5>or</h5>
            <div className="login-form__social-list">
              <button
                className="login-form__social-login-btn facebook"
                onClick={facebookLogin}
              >Facebook
              </button>
              <a href="#/ss" className="login-form__social-login-btn google">Google</a>
              <a href="/user/signup" className="login-form__social-login-btn signup">Sign up</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = store => (
  {
    loggedIn: store.user.isAuthenticated,
  }
);

const mapDispatchToProps = dispatch => (
  {
    logIn: (token, userName, pic) => (
      dispatch(logInAction(token, userName, pic))
    ),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);

