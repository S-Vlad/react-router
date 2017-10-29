import React, { Component } from 'react';
import { routes } from '../routes.js';


export default class App extends Component {
  render() {
    return (
      <div className='App container'>
        {routes}
      </div>
    );
  }
}
