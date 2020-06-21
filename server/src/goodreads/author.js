const { ImageURL } = require('./image-url');

class Author {
  constructor(data) {
    // console.log('author data:', data);
    this.id = data.id[0];
    this.name = data.name[0];
    this.role = data.role[0];
    this.image_url = new ImageURL(data.image_url[0]);
    this.small_image_url = new ImageURL(data.small_image_url[0]);
    this.link = data.link[0];
    this.average_rating = parseFloat(data.average_rating[0]);
    this.ratings_count = parseInt(data.ratings_count[0], 10);
    this.text_reviews_count = parseInt(data.text_reviews_count[0], 10);
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
