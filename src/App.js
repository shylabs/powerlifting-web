import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import AthleteList from './components/AthleteList.js';
//import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <Router>
        <AthleteList/>
      </Router>
    );
  }
}

export default App;
