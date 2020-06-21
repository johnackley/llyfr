const { Review } = require('./review');

class Shelf {
  constructor(data) {
    // console.log('shelf data:', data);
    this.name = data.name;
    this.id = data.id;
    this.review_shelf_id = data.review_shelf_id;
    this.sortable = data.sortable === 'true';
    this.exclusive = data.exclusive === 'true';
    if (data.reviews) {
      this.reviews = data.reviews.map(x => new this.Review(x));
    }
  }
}

module.exports = { Shelf };

// ShelfRef: exclusive='true' id='302365040' name='to-read' sortable='true'
// review_shelf_id: string; // '3030698042'
// reviews: Array<Review>;
