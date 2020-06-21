const { ReviewList } = require('./review-list');
const { ShelfList } = require('./shelf-list');

class Parser {
  constructor() {
  }

  async parse(response) {
    switch (response.method) {
      case 'review_list': return new ReviewList(response.payload);
      case 'shelf_list': return new ShelfList(response.payload);
      default:
        console.log(`no parser configured for ${response.method}`, response);
    }
  }
}

module.exports = { Parser };