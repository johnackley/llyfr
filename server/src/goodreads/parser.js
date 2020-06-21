const { Response } = require('./response');

class Parser {
  constructor(options = {}) {
    this.options = options;
  }

  async parseShelf(data) { return new Response(data.GoodreadsResponse); }

}

module.exports = { Parser };