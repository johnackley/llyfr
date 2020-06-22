const { SeriesWork } = require('../../series-work');
const { BadMethodError } = require('../bad-method');

class SeriesListResponse {
  constructor(data) {
    // console.log('series-list data:', data.series_works);
    if (data.Request[0].method[0] !== 'series_list') { throw new BadMethod('series_list', data.Request[0].method[0]); }
    this.series_works = data.series_works[0].series_work.map(x => new SeriesWork(x));
    // console.log('parsed series-list:', this);
  }
}

module.exports = { SeriesListResponse };
