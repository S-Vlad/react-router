import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Login extends Component {
  constructor() {
    super();

    this.checkLogin = this.checkLogin.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  checkLogin(event){
    event.preventDefault();
    let value = event.target.elements[0].value.toLowerCase();

    window.localStorage.setItem('loginValue', value)

    if (value === 'admin') {
      this.context.router.history.push('/admin');
    } else {
      this.context.router.history.push('/');
    }
  }

  render() {
    return(
      <main className='col-md-12'>
        <h3>Авторизация</h3>
        <p>Введите логин:</p>
        <form onSubmit={this.checkLogin} action=''>
          <input type='text'/>
          <input type='submit' value='Войти' />
        </form>
      </main>
    );
  }
}