const { AuthorRef } = require('./author-ref');
const { ImageURL } = require('./image-url');

class BestBook {
  constructor(data) {
    // console.log('best-book data:', data.author[0]);
    this.id = data.id[0];
    this.title = data.title[0].trim();
    this.image_url = new ImageURL(data.image_url[0]);
    this.author = new AuthorRef(data.author[0]);
  }
}

module.exports = { BestBook };

// id: [ '44767458' ],
// title: [ 'Dune (Dune, #1)' ],
// author: [ [Object] ],
// image_url: