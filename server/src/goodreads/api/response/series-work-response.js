const { WorkSeries } = require('../../work-series');
const { BadMethodError } = require('../bad-method');

class SeriesWorkResponse {
  constructor(data) {
    // console.log('series-work data:', data.series_works[0]);
    if (data.Request[0].method[0] !== 'series_work') { throw new BadMethod('series_work', data.Request[0].method[0]); }
    this.series_works = data.series_works[0].series_work.map(x => new WorkSeries(x));
    // console.log('parsed series-work:', this);
  }
}

module.exports = { SeriesWorkResponse };
