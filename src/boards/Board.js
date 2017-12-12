import React, { Component } from 'react';
import CardContainer from '../card/CardContainer';
import './Board.scss';
import home from '../assets/img/home.svg';

export default class Board extends Component { //eslint-disable-line
  render() {
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
  }
}
