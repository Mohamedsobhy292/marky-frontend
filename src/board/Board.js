import React from 'react';
import PropTypes from 'prop-types';
import './board.scss';
import home from '../assets/img/home.svg';

function setBgStyle(color) {
  return {
    backgroundColor: color,
  };
}

const Board = ({boardData}) => (
  <a className="board-component" href={boardData.id}>
    <div className="board-component__icon" style={setBgStyle(boardData.color)}>
      <img src={home} alt="" width="30" />
    </div>
    <div className="board-component__content">
      <h3 className="board-component__title">
        <a href={boardData.id}>{boardData.name}</a>
      </h3>
    </div>
  </a>
);

Board.propTypes = {
  boardData: PropTypes.objectOf(PropTypes.node).isRequired,
};

export default Board;
