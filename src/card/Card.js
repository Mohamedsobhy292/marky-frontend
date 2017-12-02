import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinkContainer from '../link/LinkContainer';
import './Card.scss';

export default class Card extends Component { //eslint-disable-line
  render() {
    return (
      <div className="card-component">
        <div className="card-component__title">
          <h3>{this.props.cardData.name}</h3>
        </div>
        <ul className="card-component__link-list">
          <LinkContainer linkData={this.props.cardData.links} />
        </ul>
        <button className="card-component__add-link">Add Link</button>
      </div>
    );
  }
}

Card.propTypes = {
  cardData: PropTypes.objectOf(PropTypes.any).isRequired,
};
