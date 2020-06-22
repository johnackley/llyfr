const { SeriesWork } = require('../../series-work');
const { BadMethodError } = require('../errors');

class SeriesListResponse {
  constructor(resp /* : Response */) {
    // console.log('series-list data:', data);
    if (resp.method !== 'series_list') { throw new BadMethodError('series_list', resp.method); }
    const data = resp.payload;
    this.series_works = data.series_works[0].series_work.map(x => new SeriesWork(x));
    // console.log('parsed series-list:', this);
  }
}

module.exports = { SeriesListResponse };
