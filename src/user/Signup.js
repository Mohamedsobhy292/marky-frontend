import React, { Component } from 'react';
import './User.scss';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      password: '',
      password2: '',
      name: '',
      errors: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const errs = {};
    const {
      name, email, password, password2,
    } = this.state;
    // MAIL VALIDAITON
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const mail = emailPattern.test(email);
    if (!email) {
      errs.mail = 'Please specify your mail';
    } else if (!mail) {
      errs.mail = 'Please specify a valid email';
    }

    // NAME VALIDAITON
    if (!name) {
      errs.name = 'Please Enter your Name';
    }

    // PASSWORD VALIDAITON
    if (!password) {
      errs.password = 'Please Enter your Password';
    } else if (password.length < 6) {
      errs.password = 'Password Must be 6 or more Chractars';
    } else if (password !== password2) {
      errs.password = 'Passwords didn\'t match';
    }

    this.setState({errors: errs});
  }

  render() {
    const {
      name, email, password, password2, errors,
    } = this.state;

    return (
      <div className="login-container">
        <div className="login-form-wrapper">
          <form className="login-form" onSubmit={this.handleSubmit}>
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
                value={email}
                onChange={e => this.setState({ email: e.currentTarget.value})}
              />
              {
                errors.mail && <span className="login-form__error">{errors.mail}</span>
              }
            </div>
            <div className="form-group">
              <label className="login-form__label" htmlFor="Name">Name</label>
              <input
                type="text"
                placeholder="enter your Name"
                className="login-form__field"
                id="Name"
                value={name}
                onChange={e => this.setState({ name: e.currentTarget.value})}
              />
              {
                  errors.name && <span className="login-form__error">{errors.name}</span>
                }
            </div>
            <div className="form-group">
              <label className="login-form__label" htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="enter your password"
                className="login-form__field"
                id="password"
                value={password}
                onChange={e => this.setState({ password: e.currentTarget.value})}
              />
              {
                errors.password && <span className="login-form__error">{errors.password}</span>
              }
            </div>
            <div className="form-group">
              <label className="login-form__label" htmlFor="password2">Confirm Password</label>
              <input
                type="password"
                placeholder="enter your password again"
                className="login-form__field"
                id="password2"
                value={password2}
                onChange={e => this.setState({ password2: e.currentTarget.value})}
              />
            </div>
            <button
              type="submit"
              className="primary-btn login-form__login-btn"
            >Sign Up
            </button>
            <div className="login-form__social-area">
              <h5>or</h5>
              <div className="login-form__social-list">
                <a href="/user/login" className="login-form__social-login-btn full-width">Login</a>
              </div>
            </div>
          </form>
        </div>
      </div>

    );
  }
}

export default SignUp;
