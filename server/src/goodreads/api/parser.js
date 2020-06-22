// const { Response } = require('./response/response');
const { AuthorListResponse } = require('./response/author-list-response');
const { AuthorShowResponse } = require('./response/author-show-response');
const { ReviewListResponse } = require('./response/review-list-response');
const { SeriesShowResponse } = require('./response/series-show-response');
const { SeriesListResponse } = require('./response/series-list-response');
const { SeriesWorkResponse } = require('./response/series-work-response');
const { ShelfListResponse } = require('./response/shelf-list-response');

class Parser {
  constructor() {
  }

  parse(response /* : Response */) {
    let ret = undefined;
    switch (response.method) {
      case 'author_list': ret = new AuthorListResponse(response); break;
      case 'author_show': ret = new AuthorShowResponse(response); break;
      case 'review_list': ret = new ReviewListResponse(response); break;
      case 'series_list': ret = new SeriesListResponse(response); break;
      case 'series_show': ret = new SeriesShowResponse(response); break;
      case 'series_work': ret = new SeriesWorkResponse(response); break;
      case 'shelf_list': ret = new ShelfListResponse(response); break;
      default:
        console.log(`no parser configured for ${response.method}`, response.method);
    }
    return ret;
  }
}

module.exports = { Parser };