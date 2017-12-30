/* global FB, gapi */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import './User.scss';
import {googleSignIn, facebookSignIn} from '../utilites/apis';
import {logInAction} from './userActions';

class Login extends Component {
  static facebookLogin(e) {
    e.preventDefault();
    FB.login((response) => {
      if (response.status === 'connected') {
        axios({
          method: 'post',
          url: facebookSignIn,
          data: {
            access_token: response.authResponse.accessToken,
          },
        }).then((res) => {
          FB.api('/me', { fields: 'id, name, email, picture' }, (fbdata) => {
            this.props.logIn(res.data.token, fbdata.name, fbdata.picture.data.url);
            this.props.history.push('/boards');
          });
        });
      }
    }, {scope: 'email, public_profile'});
  }
  constructor(props) {
    super(props);
    this.googleLogin = this.googleLogin.bind(this);
    this.state = {
      auth2: '',
    };
  }
  componentWillMount() {
    gapi.load('auth2', () => {
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      gapi.auth2.init({
        client_id: '858302282491-ckb3qabr0mfvoe0m4hhv0lkqbflc7u3h.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        // Request scopes in addition to 'profile' and 'email'
        // scope: 'additional_scope'
      }).then((res) => {
        this.setState({auth2: res});
      });
    });
  }

  googleLogin(e) {
    e.preventDefault();
    this.state.auth2.signIn({fetch_basic_profile: true}).then((res) => {
      if (res.Zi && res.w3) {
        axios({
          method: 'post',
          url: googleSignIn,
          data: {
            access_token: res.Zi.access_token,
          },
        }).then((response) => {
          this.props.logIn(response.data.token, res.w3.ig, res.w3.Paa);
        });
      }
    });
  }

  render() {
    const {loggedIn} = this.props;
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
                  onClick={this.facebookLogin}
                >Facebook
                </button>
                <button className="login-form__social-login-btn google" onClick={this.googleLogin}>
                  Google
                </button>
                {/* <div className="g-signin2" data-onsuccess="onSignIn" /> */}

                <a href="/user/signup" className="login-form__social-login-btn signup">Sign up</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

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

