import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import BoardContainer from '../board/BoardContainer';
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
      <BrowserRouter>
        <div className="App">
          <Navbar loggedIn={this.state.isAuthenticated} />
          <div className="main-layout">
            {this.state.isAuthenticated &&
              <Sidebar boardsList={data} />
            }
            <div className="main-content">
              <Route path="/" component={BoardContainer} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
