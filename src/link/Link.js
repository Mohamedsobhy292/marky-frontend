import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Link.scss';

export default class LinkItem extends Component { //eslint-disable-line
  constructor(props) {
    super(props);
    console.log(this.props.linkData); //eslint-disable-line
  }
  render() {
    return (
      <li className="link-component">
        <img src="https://www.facebook.com/rsrc.php/yl/r/H3nktOa7ZMg.ico" className="link-component__logo" alt="link-logo" />
        <a href="/s" className="link-component__link">{this.props.name}</a>
      </li>
    );
  }
}

LinkItem.propTypes = {
  name: PropTypes.string.isRequired,
};
