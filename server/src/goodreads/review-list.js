const { Review } = require('./review');

class ReviewList {
  constructor(data, reviewData, pagination) {
    // console.log('review-ref data:', data);
    this.name = data.name;
    this.id = data.id;
    this.sortable = data.sortable === 'true';
    this.exclusive = data.exclusive === 'true';
    if (data.review_shelf_id) {
      this.review_shelf_id = data.review_shelf_id;
    }
    if (reviewData) {
      this.reviews = reviewData.map(x => new Review(x));
    }
    if (pagination) {
      this.pagination = pagination;
    }
    // console.log('parsed review-list:', this);
  }
}

module.exports = { ReviewList };

// ShelfRef: exclusive='true' id='302365040' name='to-read' sortable='true'
// review_shelf_id: string; // '3030698042'
// reviews: Array<Review>;
