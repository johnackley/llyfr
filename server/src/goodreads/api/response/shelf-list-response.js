const { Pagination } = require('./pagination');
const { UserShelves } = require('../../user-shelves');
const { BadMethodError } = require('../errors');

class ShelfListResponse {
  constructor(resp /* : Response */) {
    // console.log('shelf-list data:', data);
    if (resp.method !== 'shelf_list') { throw new BadMethodError('shelf_list', resp.method); }
    const data = resp.payload;
    this.shelf_list = new UserShelves(data.shelves[0].user_shelf, new Pagination(data.shelves[0]['$']))
    // console.log('parsed shelf-list-response:', this);
  }
}

module.exports = { ShelfListResponse };

