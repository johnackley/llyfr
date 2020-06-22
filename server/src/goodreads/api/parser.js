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
    try {
      switch (response.method) {
        case 'author_list': return new AuthorListResponse(response.payload);
        case 'author_show': return new AuthorShowResponse(response.payload);
        case 'review_list': return new ReviewListResponse(response.payload);
        case 'series_list': return new SeriesListResponse(response.payload);
        case 'series_show': return new SeriesShowResponse(response.payload);
        case 'series_work': return new SeriesWorkResponse(response.payload);
        case 'shelf_list': return new ShelfListResponse(response.payload);
        default:
          console.log(`no parser configured for ${response.method}`, response);
      }
    } catch(err) {
      console.log('parser caught expection:', err);
    }
    return undefined;
  }
}

module.exports = { Parser };