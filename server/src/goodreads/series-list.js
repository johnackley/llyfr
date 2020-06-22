const { SeriesWork } = require('./series-work');

class SeriesList {
  constructor(data) {
    // console.log('series-list data:', data);
    this.id = data.series[0].id[0];
    this.title = data.series[0].title[0] ? data.series[0].title[0].trim() : '';
    this.description = data.series[0].description[0] ? data.series[0].description[0].trim() : '';
    this.note = data.series[0].note[0] ? data.series[0].note[0].trim() : '';
    this.series_works_count = parseInt(data.series[0].series_works_count[0], 10);
    this.primary_work_count = parseInt(data.series[0].primary_work_count[0], 10);
    this.numbered = data.series[0].numbered === 'true';
    this.series_works = data.series[0].series_works[0].series_work.map(x => new SeriesWork(x));
    // console.log('parsed series-list:', this);
  }
}

module.exports = { SeriesList };
