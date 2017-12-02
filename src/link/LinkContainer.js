import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinkItem from './Link';

export default class LinkContainer extends Component { //eslint-disable-line
  render() {
    return (
      <ul className="card-component__link-list">
        {
          this.props.linkData.map(item => (
            <LinkItem linkData={item} name={item.name} />
          ))
        }
      </ul>
    );
  }
}

LinkContainer.propTypes = {
  linkData: PropTypes.objectOf(PropTypes.any).isRequired,
};
