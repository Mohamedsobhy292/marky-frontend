import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import UserBoardsContainer from '../userBoards/UserBoardsContainer';
import Board from '../boards/Board';
import Login from '../login/Login';
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    };
  }
  render() {
    return (
      <Provider store={Store}>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <div className="main-layout">
              {this.state.isAuthenticated &&
                <Sidebar boardsList={data} />
              }
              <div className="main-content">
                <Route path="/" exact component={UserBoardsContainer} />
                <Route path="/boards" component={Board} />
                <Route path="/login" component={Login} />
              </div>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
