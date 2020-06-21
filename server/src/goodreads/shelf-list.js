const { Pagination } = require('./pagination');
const { UserShelf } = require('./user-shelf');

class ShelfList {
  constructor(data) {
    // console.log('shelf-ref data:', data);
    this.pagination = new Pagination(data.shelves[0]['$']);
    this.shelves = data.shelves[0].user_shelf.map(shelf => new UserShelf(shelf));
  }
}

module.exports = { ShelfList };

