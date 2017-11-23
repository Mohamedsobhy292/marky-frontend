import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import './app.scss';

const App = () => (
  <div className="App">
    <Navbar loggedIn />
    <div className="main-layout">
      <Sidebar />
      <div className="main-content">www</div>
    </div>
  </div>
);

export default App;
