import React, { Component } from 'react';


export default class Admin extends Component {
  static isAdmin() {
    if (window.localStorage.getItem('loginValue') !== 'admin') {
      return false; //получаем значение из локального хранилища и если оно не совпадает, редиректим на главную страницу, иначе на 'Admin'
    }

    return true;
  }

  render() {
    return(
      <main>
        <h3>Admin page</h3>
      </main>
    );
  }
}