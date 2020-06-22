const { WorkSeries } = require('../../work-series');
const { BadMethodError } = require('../errors');

class SeriesWorkResponse {
  constructor(resp /* : Response */) {
    // console.log('series-work data:', data);
    if (resp.method !== 'series_work') { throw new BadMethodError('series_work', resp.method); }
    const data = resp.payload;
    this.series_works = data.series_works[0].series_work.map(x => new WorkSeries(x));
    // console.log('parsed series-work:', this);
  }
}

module.exports = { SeriesWorkResponse };
