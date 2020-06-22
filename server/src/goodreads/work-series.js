const { Series } = require('./series');

class WorkSeries {
  constructor(data) {
    // console.log('work-series data:', data);
    this.id = data.id[0];
    this.user_position = data.user_position[0];
    this.series = data.series.series.map(x => new Series(x));
    // console.log('parsed work-series:', this);
  }
}

module.exports = { WorkSeries };

// id: [ '887274' ],
// user_position: [ '1, part 1 of 2' ],
// series: [ [Object] ]
