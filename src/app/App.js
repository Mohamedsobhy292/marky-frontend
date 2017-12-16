import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import UserBoardsContainer from '../userBoards/UserBoardsContainer';
import Board from '../boards/Board';
import Login from '../user/Login';
import Signup from '../user/Signup';
import Store from '../store';
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
  <Provider store={Store}>
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="main-layout">
          <Sidebar boardsList={data} />
          <div className="main-content">
            <Route path="/" exact component={UserBoardsContainer} />
            <Route path="/boards" component={Board} />
            <Route path="/user/login" component={Login} />
            <Route path="/user/signup" component={Signup} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
