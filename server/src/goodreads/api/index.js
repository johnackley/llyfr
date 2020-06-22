const { GRAPI } = require('./grapi');
const { Pagination } = require('./response/pagination');
const { Response } = require('./response/response');
const { AuthorListResponse } = require('./response/author-list-response');
const { AuthorShowResponse } = require('./response/author-show-response');
const { ReviewListResponse } = require('./response/review-list-response');
const { SeriesShowResponse } = require('./response/series-show-response');
const { SeriesWorkResponse } = require('./response/series-work-response');
const { ShelfListResponse } = require('./response/shelf-list-response');

module.exports = {
  GRAPI,
  Pagination,
  Response,
  AuthorListResponse,
  AuthorShowResponse,
  ReviewListResponse,
  SeriesShowResponse,
  SeriesWorkResponse,
  ShelfListResponse,
};
