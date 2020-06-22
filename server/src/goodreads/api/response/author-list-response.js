const { Pagination } = require('./pagination');
const { Author } = require('../../author');
const { BadMethodError } = require('../errors');

class AuthorListResponse {
  constructor(resp /* : Response */) {
    // console.log('author-list data:', data);
    if (resp.method !== 'author_list') { throw new BadMethodError('author_list', resp.method); }
    const data = resp.payload;
    this.pagination = new Pagination(data.author[0].books[0]['$']);
    this.author = new Author(data.author[0], this.pagination);
    // console.log('parsed author-list:', this);
  }
}

module.exports = { AuthorListResponse };

