import React from 'react';
import PropTypes from 'prop-types';
import './board.scss';

function setBgStyle(color) {
  return {
    borderColor: color,
  };
}

const Board = ({boardData}) => (
  <div className="board-component" style={setBgStyle(boardData.color)}>
    <h3 className="board-component__title">
      <a href={boardData.id}>{boardData.name}</a>
    </h3>
  </div>
);

Board.propTypes = {
  boardData: PropTypes.objectOf(PropTypes.node).isRequired,
};

export default Board;
