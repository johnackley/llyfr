const { Pagination } = require('./pagination');
const { Author } = require('../../author');

class AuthorListResponse {
  constructor(data) {
    // console.log('author-list data:', data);
    if (data.Request[0].method[0] !== 'author_list') { throw('wrong request.method'); }
    this.pagination = new Pagination(data.author[0].books[0]['$']);
    this.author = new Author(data.author[0], this.pagination);
    // console.log('parsed author-list:', this);
  }
}

module.exports = { AuthorListResponse };

