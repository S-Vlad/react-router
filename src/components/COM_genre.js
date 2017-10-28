import React, { Component } from 'react';
import { releaseStore } from '../release-list.js';
import { Link } from 'react-router-dom';


export default class Genre extends Component {
  render() {
    let releaseList;
    const genre = this.props.match.params.genre.replace(/-/g, ' ').toLowerCase(),
          release = releaseStore.get(genre);

    if (release.length > 0) {
      releaseList = release.map((item, index) => {

      const genreUrl = item.genre.replace(/ /g,'-').toLowerCase(),
            bandNameUrl = item.bandName.replace(/ /g,'-'),
            releaseNameUrl = item.releaseName.replace(/ /g,'-');

      return(
        <div key={index}>
          <Link to={`/genre/${genreUrl}/${bandNameUrl}/${releaseNameUrl}`}>
            {`${item.bandName} - ${item.releaseName} (${item.year})`}
          </Link>
        </div>
        )
      });
    } else {
      releaseList = 'There is no releases';
    }

    return(
      <main className='col-md-12'>
        <h3>{genre.toUpperCase()}</h3>
        {releaseList}
      </main>
    );
  }
}