const { SeriesWork } = require('../../series-work');

class SeriesWorkResponse {
  constructor(data) {
    console.log('series-work data:', data.series_works[0]);
    this.series_works = data.series_works[0].series_work.map(x => new SeriesWork(x));
    console.log('parsed series-work:', this);
  }
}

module.exports = { SeriesWorkResponse };
