const { GRAPI, Pagination } = require('./api');

// TODO update this file
const { Author } = require('./author');
const { AuthorRef } = require('./author-ref');
const { BestBook } = require('./best-book');
const { Book } = require('./book');
const { ImageURL } = require('./image-url');
const { Parser } = require('./api/parser');
const { Review } = require('./review');
const { SeriesList } = require('./series-list');
const { SeriesWork } = require('./series-work');
const { Shelf } = require('./shelf');
const { ShelfRef } = require('./shelf-ref');
const { UserShelf } = require('./user-shelf');
const { Work } = require('./work');
const { WorkRef } = require('./work-ref');

module.exports = {
  GRAPI,
  Pagination,
  Author,
  AuthorRef,
  BestBook,
  Book,
  ImageURL,
  Parser,
  Review,
  SeriesList,
  SeriesWork,
  Shelf,
  ShelfRef,
  UserShelf,
  Work,
  WorkRef,  
}
