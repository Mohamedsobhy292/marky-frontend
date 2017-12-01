import React from 'react';
import PropTypes from 'prop-types';

function setBgStyle(itembackround) {
  return {
    background: itembackround,
  };
}

const Sidebar = ({boardsList}) => (
  <div className="main-sidebar">
    <h5 className="main-sidebar__title">Your Boards</h5>
    <ul className="main-sidebar__boards">
      {boardsList.map(item => (
        <li className="main-sidebar__list-item">
          <span className="list-item-icon" style={setBgStyle(item.color)} />
          <a href={item.id}>{item.name}</a>
        </li>
        ))}
    </ul>
    <button className="secondary-btn new-board-btn">New Board </button>
  </div>
);

Sidebar.defaultProps = {
  boardsList: [],
};

Sidebar.propTypes = {
  boardsList: PropTypes.arrayOf(PropTypes.object),
};

export default Sidebar;
