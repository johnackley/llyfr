const { Pagination } = require('./pagination');
const { Review } = require('./review');
const { ShelfRef } = require('./shelf-ref');

class ReviewList {
  constructor(data) {
    console.log('review-list data:', data);
    this.shelfRef = new ShelfRef(data.shelf[0]['$']);
    this.pagination = new Pagination(data.reviews[0]['$']);
    this.reviews = data.reviews[0].review.map(x => new Review(x));
  }
}

module.exports = { ReviewList };

