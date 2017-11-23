import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({boardsList}) => (
  <div className="main-sidebar">
    <h2>Your Boards</h2>
    <ul>
      {boardsList.map(item => (
        <li>
          <span>{item.name}</span>
        </li>
        ))}
    </ul>
  </div>
);

Sidebar.defaultProps = {
  boardsList: [{name: 'beebo'}],
};

Sidebar.propTypes = {
  boardsList: PropTypes.arrayOf(PropTypes.object),
};

export default Sidebar;
