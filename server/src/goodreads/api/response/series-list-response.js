const { SeriesWork } = require('../../series-work');

class SeriesListResponse {
  constructor(data) {
    // console.log('series-work data:', data.series_works);
    this.series_works = data.series_works[0].series_work.map(x => new SeriesWork(x));
    // console.log('parsed series-work:', this);
  }
}

module.exports = { SeriesListResponse };
