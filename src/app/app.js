import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import './app.scss';

const data = [
  {
    name: 'Project Board',
    id: 50,
    color: '#D45D79',
  },
  {
    name: 'Work Board',
    id: 55,
    color: '#F9B248',
  },
  {
    name: 'mido3',
    id: 60,
    color: '#C4AFF0',
  },
];
const App = () => (
  <div className="App">
    <Navbar loggedIn />
    <div className="main-layout">
      <Sidebar boardsList={data} />
      <div className="main-content">www</div>
    </div>
  </div>
);

export default App;
