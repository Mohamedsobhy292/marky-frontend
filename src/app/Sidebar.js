import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

function setBgStyle(itembackround) {
  return {
    background: itembackround,
  };
}

const Sidebar = ({boardsList, loggedIn}) => {
  if (loggedIn) {
    return (
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
  }
  return '';
};

Sidebar.defaultProps = {
  boardsList: [],
};

Sidebar.propTypes = {
  boardsList: PropTypes.arrayOf(PropTypes.object),
  loggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = store => (
  {
    loggedIn: store.user.isAuthenticated,
  }
);


export default connect(mapStateToProps)(Sidebar);
