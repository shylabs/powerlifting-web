import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

class AthletePage extends Component {
  render() {
    return (
      <h1>Athlete Page: {this.props.match.params.athlete}</h1>
    );
  }
}

export default AthletePage;
