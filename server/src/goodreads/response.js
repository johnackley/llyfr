const { Pagination } = require('./pagination');
const { ShelfRef } = require('./shelf-ref');
const { Review } = require('./review');

class Response {
  constructor(data) {
    // console.log('response data:', data);
    // this.request = new Request(data.Request[0]);
    this.shelfRef = new ShelfRef(data.shelf[0]['$']);
    this.pagination = new Pagination(data.reviews[0]['$']);
    this.reviews = data.reviews[0].review.map(x => new Review(x));
  }
}

module.exports = { Response };

// request: Request;
// // <authentication>true</authentication>
// // <key><![CDATA[aMZDi8wrgVAaHtyOUOCjug]]></key>
// // <method><![CDATA[review_list]]></method>

// shelfRef: ShelfRef; // <shelf exclusive='true' id='302365040' name='to-read' sortable='true'></shelf>

// pagination: Pagination; // start="1" end="9" total="9">
// reviews: Array<Review>;
