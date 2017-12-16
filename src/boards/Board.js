import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import CardContainer from '../card/CardContainer';
import './Board.scss';
import home from '../assets/img/home.svg';

const Board = ({loggedIn}) => {
  if (!loggedIn) {
    return (
      <Redirect to="/user/login" />
    );
  }
  return (
    <div className="board">
      <div className="board__header">
        <div className="board__icon">
          <img src={home} alt="" width="30" />
        </div>
        <h1 className="board__title">Board Name Goes Here</h1>
        <div className="board__filters">
          <span className="title">Cards View </span>
          <div className="filter_item is-active">
            <img src={home} alt="" width="30" />
          </div>
          <div className="filter_item">
            <img src={home} alt="" width="30" />
          </div>
        </div>
      </div>
      <CardContainer />
    </div>
  );
};

Board.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = store => (
  {
    loggedIn: store.user.isAuthenticated,
  }
);

export default connect(mapStateToProps)(Board);
