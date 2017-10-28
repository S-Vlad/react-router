import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class NotFound extends Component {
  render() {
    return(
      <main className='col-md-12'>
        <h3>Страница не найдена. Вернуться на <Link to='/'>главную</Link> страницу</h3>
      </main>
    );
  }
}