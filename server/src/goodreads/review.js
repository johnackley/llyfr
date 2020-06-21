const { Book } = require('./book');
const { ShelfRef } = require('./shelf-ref');

class Review {
  constructor(data) {
    // console.log('review data:', data);
    this.id = data.id[0];
    this.rating = parseInt(data.rating, 10);
    this.votes = parseInt(data.votes, 10);
    this.spoiler_flag = data.spoiler_flag === 'true';
    this.spoilers_state = data.spoilers_state[0];
    this.recommended_for = data.recommended_for[0];
    this.recommended_by = data.recommended_by[0];
    this.started_at = new Date(data.started_at[0]);
    this.read_at = data.read_at[0];
    this.date_added = new Date(data.date_added[0]);
    this.date_updated = new Date(data.date_updated[0]);
    this.read_count = parseInt(data.read_count, 10);
    this.body = data.body[0];
    this.comments_count = parseInt(data.comments_count, 10);
    this.url = data.url[0];
    this.link = data.link[0];
    this.book = new Book(data.book[0]);
    this.shelfRefs = data.shelves[0].shelf.map(x => new ShelfRef(x['$']));
  }
}

module.exports = { Review };

// id: string; // 3391366969
// book: Book;
// rating: number; // 0
// votes: number; // 0
// spoiler_flag: boolean; // false
// spoilers_state: string; // none
// shelves: Array<ShelfRef>;
// recommended_for: string; // 
// recommended_by: string; // 
// started_at: string; // 
// read_at: string; // 
// date_added: date; // Sun Jun 14 06:55:39 -0700 2020
// date_updated: date; // Sun Jun 14 06:55:40 -0700 2020
// read_count: number; // 0
// body: string; // 
// comments_count: number; // 0
// url: string; // <![CDATA[https://www.goodreads.com/review/show/3391366969]]>
// link: string; // <![CDATA[https://www.goodreads.com/review/show/3391366969]]>
// owned: string; // 0
