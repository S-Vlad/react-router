import React, { Component } from 'react';


export default class ReleaseName extends Component {
  render() {
    let params = this.props.match.params;

    return(
      <main>
        <h3>{params.genre.replace(/-/g,' ').toUpperCase()}</h3>
        <p>{params.bandname.replace(/-/g,' ')} - {params.releasename.replace(/-/g,' ')}</p>
      </main>
    );
  }
}