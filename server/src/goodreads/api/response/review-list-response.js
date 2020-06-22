const { Pagination } = require('./pagination');
const { ReviewList } = require('../../review-list');

class ReviewListResponse {
  constructor(data) {
    // console.log('review-list data:', data);
    if (data.Request[0].method[0] !== 'review_list') { throw('wrong request.method'); }
    this.pagination = new Pagination(data.reviews[0]['$']);
    this.reviewList = new ReviewList(data.shelf[0]['$'], data.reviews[0].review, this.pagination);
    // console.log('parsed review-list:', this);
  }
}

module.exports = { ReviewListResponse };

