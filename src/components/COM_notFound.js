import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class NotFound extends Component {
  render() {
    return(
      <main>
        <h3>Page not found. Go to <Link to='/'>main</Link> page</h3>
      </main>
    );
  }
}