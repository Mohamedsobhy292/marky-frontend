import React from 'react';
import Board from './UserBoards';

const data = [
  {
    name: 'First Board',
    id: 555,
    color: '#D45D79',
  },
  {
    name: 'First Board',
    id: 555,
    color: '#F9B248',
  },
  {
    name: 'First Board',
    id: 555,
    color: '#C4AFF0',
  },
  {
    name: 'First Board',
    id: 55,
    color: '#D45D79',
  },
];

const UserBoardsContainer = () => (
  <div className="boards-list">
    {
        data.map(item => (
          <div className="one-fourth">
            <Board boardData={item} />
          </div>
          ))
    }

  </div>
);

export default UserBoardsContainer;
