import React, { Component } from 'react';
import Card from './Card';

const data = [
  {
    name: 'card name number 1 ',
    links: [
      {
        name: 'link 1',
      },
      {
        name: 'link 2',
      },
    ],
  },
  {
    name: 'card name number 2 ',
    links: [
      {
        name: 'link 1',
      },
      {
        name: 'link 2',
      },
    ],
  },
  {
    name: 'card name number 3 ',
    links: [
      {
        name: 'link 1',
      },
      {
        name: 'link 2',
      },
    ],
  },
];

export default class CardContainer extends Component { //eslint-disable-line
  render() {
    return (
      <div className="card-list">
        {
          data.map(item => (
            <div className="card-wrapper">
              <Card cardData={item} />
            </div>
          ))
        }
      </div>
    );
  }
}
