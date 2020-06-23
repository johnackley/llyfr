class SeriesRef {
  constructor(data) {
    // console.log('series-ref data:', data);
    this.id = data.id[0];
    this.title = data.title[0] ? data.title[0].trim() : '';
    this.description = data.description[0] ? data.description[0].trim() : '';
    this.note = data.note[0] ? data.note[0].trim() : '';
    this.series_works_count = parseInt(data.series_works_count[0], 10);
    this.primary_work_count = parseInt(data.primary_work_count[0], 10);
    this.numbered = data.numbered[0] === 'true';
    // console.log('parsed series-ref:', this);
  }
}

module.exports = { SeriesRef };
