export const releaseStore = {
  release : [
    {
      bandName: 'Uneven Structure',
      releaseName: 'Februus',
      year: '2011',
      genre: 'Djent'
    },
    {
      bandName: 'Uneven Structure',
      releaseName: 'Eight',
      year: '2013',
      genre: 'Djent'
    },
    {
      bandName: 'Shape Of Despair',
      releaseName: 'Angels Of Distress',
      year: '2001',
      genre: 'Doom Metal'
    },
    {
      bandName: 'TesseracT',
      releaseName: 'One',
      year: '2011',
      genre: 'Djent'
    },
    {
      bandName: 'Colosseum',
      releaseName: 'Chapter 2: Numquam',
      year: '2009',
      genre: 'Doom Metal'
    }
  ],
  get: function(genre) {
    return this.release.filter(function(item) {
      return item.genre.toLowerCase() === genre; //object
    });
  },
  all: function() {return this.release;}
}