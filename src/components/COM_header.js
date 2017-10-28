import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../app.css';


export default class Header extends Component {
  render() {
    return(
      <header>
        <ul className='nav nav-pills'>
          <li><NavLink to='/' activeClassName='active' exact={true}>Main</NavLink></li>
          <li><NavLink to='/admin' activeClassName='active'>Admin</NavLink></li>
          <li><NavLink to='/list'  activeClassName='active'>Genres</NavLink></li>
          <li><NavLink to='/login' activeClassName='active'>Sign In</NavLink></li>
        </ul>
        <hr/>
      </header>
    );
  }
}