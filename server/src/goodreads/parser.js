const xml2js = require('xml2js');
const { Response } = require('./response');

class Parser {
  constructor(options = {}) {
    this.options = options;
  }

  async parse(responseXML) {
  // console.log(responseXML);
  return xml2js.parseStringPromise(responseXML /* this.options */ ).then(function (result) {
      // console.log('xml parsed to:', result);
      return new Response(result.GoodreadsResponse);
    })
    .catch(function (err) {
      // Failed
      console.log('xml parse failed', err);
    });
  }

}

module.exports = { Parser };