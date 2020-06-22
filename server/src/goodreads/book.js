const { AuthorRef } = require('./author-ref');
const { ImageURL } = require('./image-url');
const { WorkRef } = require('./work-ref');

class Book {
  constructor(data) {
    // console.log('book data:', data);
    this.id = data.id[0]['_'];
    this.isbn = data.isbn[0];
    this.isbn13 = data.isbn13[0];
    this.text_reviews_count = parseInt(data.text_reviews_count[0]['_'], 10);
    this.uri = data.uri[0];
    this.title = data.title[0];
    this.title_without_series = data.title_without_series[0];
    this.image_url = new ImageURL(data.image_url[0]);
    this.small_image_url = new ImageURL(data.small_image_url[0]);
    this.large_image_url = new ImageURL(data.large_image_url[0]);
    this.link = data.link[0];
    this.num_pages = data.num_pages[0];
    this.format = data.format[0];
    this.edition_information = data.edition_information[0];
    this.publisher = data.publisher[0];
    this.publication_day = data.publication_day[0];
    this.publication_year = data.publication_year[0];
    this.publication_month = data.publication_month[0];
    this.average_rating = parseFloat(data.average_rating[0]);
    this.ratings_count = parseInt(data.ratings_count[0], 10);
    this.description = data.description[0] ? data.description[0].trim() : '';
    this.published = data.published[0];
    this.workRef = new WorkRef(data.work[0]);
    this.authors = data.authors[0].author.map(author => new AuthorRef(author));
  }
}

module.exports = { Book };

// id: number; // type="integer" 50159129
// isbn: string; // 1419737112
// isbn13: string; // 9781419737114
// text_reviews_count: number; // type="integer" 102
// uri: string; // kca://book/amzn1.gr.book.v3.htvtGaTCprQO4eWV
// title: string; // I Will Judge You by Your Bookshelf
// title_without_series: string; // I Will Judge You by Your Bookshelf
// image_url: string; // https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png
// small_image_url: string; // https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png
// large_image_url/: string; // 
// link: string; // https://www.goodreads.com/book/show/50159129-i-will-judge-you-by-your-bookshelf
// num_pages: string; // 
// format: string; // 
// edition_information/: string; // 
// publisher: string; // 
// publication_day: string; // 
// publication_year: string; // 
// publication_month: string; // 
// average_rating: number; // 3.82
// ratings_count: number; // 1153
// description: string; // &lt;b&gt;A look at the culture and fanaticism of book lovers, from beloved &lt;i&gt;New York Times&lt;/i&gt; illustrator Grant Snider&lt;/b&gt;&lt;br /&gt;  &lt;br /&gt; It’s no secret, but we are judged by our bookshelves. We learn to read at an early age, and as we grow older we shed our beloved books for new ones. But some of us surround ourselves with books. We collect them, decorate with them, are inspired by them, and treat our books as sacred objects. In this lighthearted collection of one- and two-page comics, writer-artist Grant Snider explores bookishness in all its forms, and the love of writing and reading, building on the beloved literary comics featured on his website, Incidental Comics. With a striking package including a die-cut cover, &lt;i&gt;I Will Judge You By Your Bookshelf&lt;/i&gt; is the perfect gift for bookworms of all ages.&lt;br /&gt;  
// authors: array<Author>
// published: string; // 
// work: Work; // id: 72611000 uri: kca://work/amzn1.gr.work.v2.142315cc-55d5-4113-b77a-cf484ecf223d
