import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Home extends Component {
  render() {
    return(
      <main className='col-md-12'>
        <h3>Главная страница</h3>
        <p>Перейти на страницу жанра:</p>
        <form onSubmit={this.submitHandler} action=''>
          <input placeholder='Введите жанр' type='text' />
          <input type='submit' value='Перейти' />
        </form>
      </main>
    );
  }

  //ДЛЯ ПРОГРАММИРУЕМОГО ПЕРЕХОДА

  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  submitHandler(event){
    event.preventDefault();
    let value = event.target.elements[0].value.toLowerCase();
    // this.props.history.push(`genre/${value}`); //похоже на 'context', но использует props
    this.context.router.history.push(`genre/${value}`);

    //если убрать 'contextType', то 'context' работать не будет, так как this.context можно использовать только при наличии проверки contextTypes.
  }

}