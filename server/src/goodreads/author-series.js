const { AuthorRef } = require('./author-ref');
const { SeriesWork } = require('./series-work');

class AuthorSeries {
  constructor(data) {
    // console.log('author-series data:', data);
    // grab the first one
    const authorData = data.series_work[0].work[0].best_book[0].author[0];
    this.author_ref = new AuthorRef(authorData);
    this.series = data.series_work.map(x => new SeriesWork(x));
    // console.log('parsed author-series:', this);
  }

}
module.exports = { AuthorSeries };

// id: [ '887274' ],
// user_position: [ '1, part 1 of 2' ],
// work: [ [Object] ]
