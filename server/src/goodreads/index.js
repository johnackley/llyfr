const { Author } = require('./author');
const { Book } = require('./book');
const { ImageURL } = require('./image-url');
const { GRAPI } = require('./api');
const { Pagination } = require('./pagination');
const { Parser } = require('./parser');
const { Response } = require('./response');
const { Review } = require('./review');
const { Shelf } = require('./shelf');
const { ShelfList } = require('./shelf-list');
const { ShelfRef } = require('./shelf-ref');
const { Work } = require('./work');

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
