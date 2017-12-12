/* global FB */
import React from 'react';
import './User.scss';

function facebookLogin(e) {
  e.preventDefault();
  FB.login((response) => {
    console.log(response); //eslint-disable-line
  }, {scope: 'email, public_profile'});
}


const Login = () => (
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

export default Login;
