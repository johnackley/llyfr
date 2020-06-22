const { BestBook } = require('./best-book');

class Work {
  constructor(data) {
    // console.log('work data:', data.best_book);
    this.id = data.id[0];
    this.uri = data.uri[0];
    this.best_book = data.best_book[0];
    this.books_count = parseInt(data.books_count[0], 10);
    if (data.original_publication_day[0]) {
      this.original_publication_day = parseInt(data.original_publication_day[0], 10);
    }
    if (data.original_publication_month[0]) {
      this.original_publication_month = parseInt(data.original_publication_month[0], 10);
    }
    if (data.original_publication_year[0]) {
      this.original_publication_year = parseInt(data.original_publication_year[0], 10);
    }
    this.original_title = data.original_title[0].trim();
    this.ratings_count = parseInt(data.ratings_count[0], 10);
    this.ratings_sum = parseFloat(data.ratings_sum[0]);
    this.reviews_count = parseInt(data.reviews_count[0], 10);
    this.text_reviews_count = parseInt(data.text_reviews_count[0], 10);
    if (data.average_rating[0]) {
      this.average_rating = parseFloat(data.average_rating[0]);
    }
    this.best_book = new BestBook(data.best_book[0]);
    // console.log('parsed work:', this);
  }
}

module.exports = { Work };

// id: [ '3634639' ],
// uri: [ 'kca://work/amzn1.gr.work.v1.dzn2KcfMTbv4_Y7J--YkzQ' ],
// best_book: [
//   {
//     id: [Array],
//     title: [Array],
//     author: [Array],
//     image_url: [Array]
//   }
// ],
// books_count: [ '344' ],
// original_publication_day: [ '1' ],
// original_publication_month: [ '6' ],
// original_publication_year: [ '1965' ],
// original_title: [ 'Dune' ],
// ratings_count: [ '712605' ],
// ratings_sum: [ '3012720' ],
// reviews_count: [ '1267924' ],
// text_reviews_count: [ '20585' ],
// average_rating: [ '' ]
