const { SeriesWork } = require('../../series-work');

class SeriesListResponse {
  constructor(data) {
    // console.log('series-list data:', data.series_works);
    if (data.Request[0].method[0] !== 'series_list') { throw(`wrong request.method ${data.Request[0].method[0]}`); }
    this.series_works = data.series_works[0].series_work.map(x => new SeriesWork(x));
    // console.log('parsed series-list:', this);
  }
}

module.exports = { SeriesListResponse };
