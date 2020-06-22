const { UserShelf } = require('./user-shelf');

class ShelfList {
  constructor(data, pagination) {
    // console.log('shelf-list data:', data);
    // this.name = data.name;
    // this.id = data.id;
    // this.sortable = data.sortable === 'true';
    // this.exclusive = data.exclusive === 'true';
    // if (data.review_shelf_id) {
    //   this.review_shelf_id = data.review_shelf_id;
    // }
    this.shelves = data.map(shelf => new UserShelf(shelf));
    if (pagination) {
      this.pagination = pagination;
    }
    // console.log('parsed shelf-list:', this);
  }
}

module.exports = { ShelfList };

// ShelfRef: exclusive='true' id='302365040' name='to-read' sortable='true'
// review_shelf_id: string; // '3030698042'
// reviews: Array<Review>;
