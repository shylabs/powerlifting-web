import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AthleteList from './components/AthleteList.js';
import AthletePage from './components/AthletePage.js';
//import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={AthleteList}/>
            <Route path="/harry" component={AthletePage}/>
            <Route path="/athletes/:athlete" component={AthletePage}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
