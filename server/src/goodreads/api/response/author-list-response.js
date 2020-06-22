const { Pagination } = require('./pagination');
const { Book } = require('../../book');

class AuthorListResponse {
  constructor(data) {
    // console.log('author-list data:', data);
    if (data.Request[0].method[0] !== 'author_list') { throw('wrong request.method'); }
    this.id = data.author[0].id[0];
    this.name = data.author[0].name[0];
    this.link = data.author[0].link[0];
    this.pagination = new Pagination(data.author[0].books[0]['$']);
    this.books = data.author[0].books[0].book.map(x => new Book(x));
    // console.log('parsed author-list:', this);
  }
}

module.exports = { AuthorListResponse };

