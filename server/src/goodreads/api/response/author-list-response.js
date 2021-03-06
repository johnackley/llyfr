const { Pagination } = require('./pagination');
const { AuthorBooks } = require('../../author-books');
const { BadMethodError } = require('../errors');

class AuthorListResponse {
  constructor(resp /* : Response */) {
    // console.log('author-list data:', data);
    if (resp.method !== 'author_list') { throw new BadMethodError('author_list', resp.method); }
    const data = resp.payload;
    this.pagination = new Pagination(data.author[0].books[0]['$']);
    this.author_books = new AuthorBooks(data.author[0], this.pagination);
    // console.log('parsed author-list:', this);
  }
}

module.exports = { AuthorListResponse };

