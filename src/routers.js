import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/COM_header.js';
import Admin from './components/COM_admin.js';
import Login from './components/COM_login.js';
import Genre from './components/COM_genre.js';
import Home from './components/COM_home.js';
import List from './components/COM_list.js';
import ReleaseName from './components/COM_release-name.js';
import NotFound from './components/COM_notFound.js';


export const routes = (
  //'BrowserRouter' использует 'HTML5 history'. для программной навигации можно получить доступ к 'history' через 'context'

  //exact необходим, если ссылка состоит из нескольких динамически генерирующихся частей, что позволит обращаться к нужному шаблону и выдавать 'notFound' страницу, если такой не сущесвует

  <BrowserRouter>
    <div className='container'>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} /> {/*'exact' указывает на точное соответствие*/}
        <Route path='/list' component={List} />
        <Route exact path='/genre/:genre' component={Genre} />
        <Route exact path='/genre/:genre/:bandname/:releasename' component={ReleaseName}/>
        <Route path='/admin'
          render={ () => (Admin.isAdmin() ? (<Admin />) : (<Redirect to='/' />)) }
        /> {/*рендерим компонент если логин='admin', иначе редиректим*/}
        <Route path='/login' component={Login} />
        <Route path='*' component={NotFound} /> {/*Все остальное*/}
      </Switch>
    </div>
  </BrowserRouter>
);