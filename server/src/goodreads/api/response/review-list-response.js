const { Pagination } = require('./pagination');
const { ReviewList } = require('../../review-list');
const { BadMethodError } = require('../bad-method');

class ReviewListResponse {
  constructor(data) {
    // console.log('review-list data:', data);
    if (data.Request[0].method[0] !== 'review_list') { throw new BadMethod('review_list', data.Request[0].method[0]); }
    this.pagination = new Pagination(data.reviews[0]['$']);
    this.reviewList = new ReviewList(data.shelf[0]['$'], data.reviews[0].review, this.pagination);
    // console.log('parsed review-list:', this);
  }
}

module.exports = { ReviewListResponse };

