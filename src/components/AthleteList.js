import React, { Component } from 'react';
import { Link, Route} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import AthletePage from './AthletePage.js';

class AthleteList extends Component {
  render() {
    return (
      <ol>
        <LinkContainer to='/athletes/harry'>
          <li>Harry</li>
        </LinkContainer>
        <LinkContainer to='/athletes/sam'>
          <li>Sam</li>
        </LinkContainer>
        <LinkContainer to='/athletes/stevie'>
          <li>Stevie</li>
        </LinkContainer>
        <li>Bart</li>
      </ol>
    );
  }
}

export default AthleteList;
