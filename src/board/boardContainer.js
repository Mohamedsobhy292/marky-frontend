import React from 'react';
import Board from './Board';

const data = [
  {
    name: 'First Board',
    id: 555,
  },
  {
    name: 'First Board',
    id: 555,
  },
  {
    name: 'First Board',
    id: 555,
  },
  {
    name: 'First Board',
    id: 555,
  },
];

const boardContainer = () => (
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

export default boardContainer;
