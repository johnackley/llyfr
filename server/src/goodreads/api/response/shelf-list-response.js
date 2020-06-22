const { Pagination } = require('./pagination');
const { UserShelf } = require('../../user-shelf');

class ShelfListResponse {
  constructor(data) {
    // console.log('shelf-ref data:', data);
    if (data.Request[0].method[0] !== 'shelf_list') { throw('wrong request.method'); }
    this.pagination = new Pagination(data.shelves[0]['$']);
    this.shelves = data.shelves[0].user_shelf.map(shelf => new UserShelf(shelf));
  }
}

module.exports = { ShelfListResponse };

