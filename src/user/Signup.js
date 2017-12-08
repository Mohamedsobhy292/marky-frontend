import React from 'react';
import './User.scss';

const SignUp = () => (
  <div className="login-container">
    <div className="login-form-wrapper">
      <form className="login-form">
        <h1 className="login-form__title">Create a new Account</h1>
        <p className="login-form__desc">
          Create a new account in order to or add and save links
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
          <label className="login-form__label" htmlFor="Name">Name</label>
          <input
            type="text"
            placeholder="enter your Name"
            className="login-form__field"
            id="Name"
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
        <div className="form-group">
          <label className="login-form__label" htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            placeholder="enter your password again"
            className="login-form__field"
            id="password2"
          />
        </div>
        <button className="primary-btn login-form__login-btn">Login</button>
        <div className="login-form__social-area">
          <h5>or</h5>
          <div className="login-form__social-list">
            <a href="#/ss" className="login-form__social-login-btn facebook">Facebook</a>
            <a href="#/ss" className="login-form__social-login-btn google">Google</a>
            <a href="/user/login" className="login-form__social-login-btn">Login</a>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default SignUp;
