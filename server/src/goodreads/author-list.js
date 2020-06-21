const { Pagination } = require('./pagination');
const { Book } = require('./book');

class AuthorList {
  constructor(data) {
    console.log('author-list data:', data.author[0].books);
    this.id = data.author[0].id[0];
    this.name = data.author[0].name[0];
    this.link = data.author[0].link[0];
    this.pagination = new Pagination(data.author[0].books[0]['$']);
    this.books = data.author[0].books[0].book.map(x => new Book(x));
    console.log('parsed author-list:', this);
  }
}

module.exports = { AuthorList };

