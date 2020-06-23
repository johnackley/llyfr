const { UserShelf } = require('./user-shelf');

class UserShelves {
  constructor(data, pagination) {
    // console.log('shelf-list data:', data);
    // TODO this.user_ref = new UserRef(?);
    this.shelves = data.map(shelf => new UserShelf(shelf));
    if (pagination) {
      this.pagination = pagination;
    }
    // console.log('parsed shelf-list:', this);
  }
}

module.exports = { UserShelves };

// ShelfRef: exclusive='true' id='302365040' name='to-read' sortable='true'
// review_shelf_id: string; // '3030698042'
// reviews: Array<Review>;
