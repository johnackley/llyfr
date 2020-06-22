const { Pagination } = require('./pagination');
const { ReviewList } = require('../../review-list');
const { BadMethodError } = require('../errors');

class ReviewListResponse {
  constructor(resp /* : Response */) {
    // console.log('review-list data:', data);
    if (resp.method !== 'review_list') { throw new BadMethodError('review_list', resp.method); }
    const data = resp.payload;
    this.pagination = new Pagination(data.reviews[0]['$']);
    this.reviewList = new ReviewList(data.shelf[0]['$'], data.reviews[0].review, this.pagination);
    // console.log('parsed review-list:', this);
  }
}

module.exports = { ReviewListResponse };

