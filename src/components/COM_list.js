import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { releaseStore } from '../release-list.js';


export default class List extends Component {
  render() {
    let releaseList,
        genreList,
        tempObj = {};//будет содержать уникальные св-ва
    const release = releaseStore.all();

    release.forEach((item) => { //избавляемся от повторяющихся свойств
      const objProperty = item.genre;
      tempObj[objProperty] = true;
    });

    genreList = Object.keys(tempObj).map((item, index) => {
      const genreL = item.replace(/ /g,'-').toLowerCase();

      return(
        <li key={index}>
          <Link to={`/genre/${genreL}`}>{item}</Link>
        </li>
      )
    });

    releaseList = release.map((item, index) => {

      const genreUrl = item.genre.replace(/ /g,'-').toLowerCase(),
            bandNameUrl = item.bandName.replace(/ /g,'-'), //заменяем все пробелы на '-'
            releaseNameUrl = item.releaseName.replace(/ /g,'-');

      return (
        <li key={index}>
          <Link to={`/genre/${genreUrl}/${bandNameUrl}/${releaseNameUrl}`}>
            {`${item.bandName} - ${item.releaseName} (${item.year})`}
          </Link>
        </li>
      )
    });

    return(
      <main className='col-md-12'>
        <div>
          <h3>List of genres</h3>
        </div>
        <div>
          <ul>
            {genreList}
          </ul>
        </div>
        <h3>New releases:</h3>
        <ul>
          {releaseList}
        </ul>
      </main>
    );
  }
}