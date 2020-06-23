const { AuthorSeries } = require('../../author-series');
const { BadMethodError } = require('../errors');

class SeriesListResponse {
  constructor(resp /* : Response */) {
    // console.log('series-list data:', data);
    if (resp.method !== 'series_list') { throw new BadMethodError('series_list', resp.method); }
    const data = resp.payload;
    this.author_series = new AuthorSeries(data.series_works[0]);
    // console.log('parsed series-list:', this);
  }
}

module.exports = { SeriesListResponse };
