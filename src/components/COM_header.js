import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../app.css';


export default class Header extends Component {
  render() {
    return(
      <header>
        <ul className='nav nav-pills'>
          <li><NavLink to='/' activeClassName='active' exact={true}>Главная</NavLink></li>
          <li><NavLink to='/admin' activeClassName='active'>Админ-панель</NavLink></li>
          <li><NavLink to='/list'  activeClassName='active'>Жанры</NavLink></li>
          <li><NavLink to='/login' activeClassName='active'>Войти</NavLink></li>
        </ul>
        <hr/>
      </header>
    );
  }
}