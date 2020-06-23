const { SeriesEntry } = require('./series-entry');
// const { WorkRef } = require('./work-ref');

class WorkSeries {
  constructor(data) {
    // console.log('work-series data:', data);
    // get first one
    const work_data = {id: ['12'], uri: ['xyz']}; // data[0];
    // this.work_ref = new WorkRef(work_data);
    this.series_entries = data.map(x => new SeriesEntry(x));
    // console.log('parsed work-series:', this);
  }
}

module.exports = { WorkSeries };

// id: [ '887274' ],
// user_position: [ '1, part 1 of 2' ],
// series: [ [Object] ]
