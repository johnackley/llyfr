class ShelfRef {
  constructor(data) {
    // console.log('shelf-ref data:', data);
    this.name = data.name;
    this.id = data.id;
    this.sortable = data.sortable === 'true';
    this.exclusive = data.exclusive === 'true';
    if (data.review_shelf_id) {
      this.review_shelf_id = data.review_shelf_id;
    }
  }
}

module.exports = { ShelfRef };

// ShelfRef: exclusive='true' id='302365040' name='to-read' sortable='true'
// review_shelf_id: string; // '3030698042'
// reviews: Array<Review>;
