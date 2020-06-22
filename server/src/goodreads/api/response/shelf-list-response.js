const { Pagination } = require('./pagination');
const { ShelfList } = require('../../shelf-list');
const { BadMethodError } = require('../bad-method');

class ShelfListResponse {
  constructor(data) {
    // console.log('shelf-ref data:', data);
    if (data.Request[0].method[0] !== 'shelf_list') { throw new BadMethod('shelf_list', data.Request[0].method[0]); }
    this.pagination = new Pagination(data.shelves[0]['$']);
    this.shelf_list = new ShelfList(data.shelves[0].user_shelf, this.pagination)
  }
}

module.exports = { ShelfListResponse };

