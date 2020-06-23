const { AuthorRef } = require('./author-ref');
const { Book } = require('./book');

class AuthorBooks {
  constructor(data, pagination) {
    // console.log('author-books data:', data);
    this.author_ref = new AuthorRef(data);
    this.books = data.books[0].book.map(x => new Book(x));
    if (pagination) {
      this.pagination = pagination;
    }
    // console.log('parsed author-books:', this);
  }
}

module.exports = { AuthorBooks };

// id: string; // 5198410
// name: string; // Grant Snider
// role: string; // 
// image_url: image-url;
// small_image_url: image-url
// link: string;
// average_rating: number; // 3.98
// ratings_count: number; // 5702
// text_reviews_count: number; // 861
