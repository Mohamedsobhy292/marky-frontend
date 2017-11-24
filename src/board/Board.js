import React from 'react';
import PropTypes from 'prop-types';
import './board.scss';

const Board = ({boardData}) => (
  <div className="board-component">
    <h3 className="board-component__title">
      <a href={boardData.id}>{boardData.name}</a>
    </h3>
  </div>
);

Board.propTypes = {
  boardData: PropTypes.objectOf(PropTypes.node).isRequired,
};

export default Board;
