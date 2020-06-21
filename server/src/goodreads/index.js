const { Author } = require('./author');
const { AuthorList } = require('./author-list');
const { AuthorRef } = require('./author-ref');
const { AuthorShow } = require('./author-show');
const { BestBook } = require('./best-book');
const { Book } = require('./book');
const { ImageURL } = require('./image-url');
const { GRAPI } = require('./api');
const { Pagination } = require('./pagination');
const { Parser } = require('./parser');
const { Response } = require('./response');
const { Review } = require('./review');
const { Series } = require('./series');
const { SeriesShow } = require('./series-show');
const { SeriesWork } = require('./series-work');
const { Shelf } = require('./shelf');
const { ShelfList } = require('./shelf-list');
const { ShelfRef } = require('./shelf-ref');
const { UserShelf } = require('./user-shelf');
const { Work } = require('./work');
const { WorkRef } = require('./work-ref');

module.exports = {
  Author,
  Book,
  ImageURL,
  GRAPI,
  Pagination,
  Parser,
  Response,
  Review,
  Shelf,
  ShelfList,
  ShelfRef,
  Work
}
