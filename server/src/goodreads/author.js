const { ImageURL } = require('./image-url');
const { Book } = require('./book');

class Author {
  constructor(data, pagination) {
    // console.log('author data:', data);
    this.id = data.id[0];
    this.name = data.name[0];
    if (data.hasOwnProperty('role')) {
      this.role = data.role[0];
    }
    if (data.hasOwnProperty('link')) {
      this.link = data.link[0];
    }
    if (data.hasOwnProperty('image_url')) {
      this.image_url = new ImageURL(data.image_url[0]);
    }
    if (data.hasOwnProperty('small_image_url')) {
      this.small_image_url = new ImageURL(data.small_image_url[0]);
    }
    if (data.hasOwnProperty('large_image_url')) {
      this.large_image_url = new ImageURL(data.large_image_url[0]);
    }
    if (data.hasOwnProperty('average_rating')) {
      this.average_rating = parseFloat(data.average_rating[0]);
    }
    if (data.hasOwnProperty('ratings_count')) {
      this.ratings_count = parseInt(data.ratings_count[0], 10);
    }
    if (data.hasOwnProperty('text_reviews_count')) {
      this.text_reviews_count = parseInt(data.text_reviews_count[0], 10);
    }
    if (data.hasOwnProperty('fans_count')) {
      this.fans_count = parseInt(data.fans_count[0]['_'], 10);
    }
    if (data.hasOwnProperty('author_followers_count')) {
      this.author_followers_count = parseInt(data.author_followers_count[0]['_'], 10);
    }
    if (data.hasOwnProperty('about')) {
      this.about = data.about[0];
    }
    if (data.hasOwnProperty('influences')) {
      this.influences = data.influences[0];
    }
    if (data.hasOwnProperty('works_count')) {
      this.works_count = parseInt(data.works_count[0], 10);
    }
    if (data.hasOwnProperty('gender')) {
      this.gender = data.gender[0];
    }
    if (data.hasOwnProperty('hometown')) {
      this.hometown = data.hometown[0];
    }
    if (data.hasOwnProperty('born_at')) {
      this.born_at = data.born_at[0];
    }
    if (data.hasOwnProperty('died_at')) {
      this.died_at = data.died_at[0];
    }
    if (data.hasOwnProperty('goodreads_author')) {
      this.goodreads_author = data.goodreads_author[0];
    }
    if (data.hasOwnProperty('userId')) {
      this.userId = data.user[0].id[0]['_'];
    }
    if (data.hasOwnProperty('books')) {
      this.books = data.books[0].book.map(x => new Book(x));
    }
    if (pagination) {
      this.pagination = pagination;
    }
    // console.log('parsed author:', this);
  }
}

module.exports = { Author };

// id: string; // 5198410
// name: string; // Grant Snider
// role: string; // 
// image_url: image-url;
// small_image_url: image-url
// link: string;
// average_rating: number; // 3.98
// ratings_count: number; // 5702
// text_reviews_count: number; // 861
