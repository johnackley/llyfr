const { SeriesRef } = require('./series-ref');

class SeriesEntry {
  constructor(data) {
    // console.log('series-entry data:', data);
    this.id = data.id[0];
    this.user_position = data.user_position[0];
    this.series_ref = new SeriesRef(data.series[0]);
    // console.log('parsed series-entry:', this);
  }
}

module.exports = { SeriesEntry };

// id: [ '887274' ],
// user_position: [ '1, part 1 of 2' ],
// series: [ [Object] ]
