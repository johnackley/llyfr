const request = require('request-promise');
const xml2js = require('xml2js');
const { Response } = require('./response/response');
const { Parser } = require('./parser');

class GRAPI {
  constructor(options) {
    this.options = options;
    this.lastFetchMS = 0;
    this.parser = new Parser();
  }

  // API METHODS - https://www.goodreads.com/api
  // https://www.goodreads.com/api/index#auth.user   —   Get id of user who authorized OAuth.
  // TODO

  // https://www.goodreads.com/api/index#author.books   —   Paginate an author's books.
  async authorBooks(authorId, page = 1) {
    return this.fetch('author/list.xml', { id: authorId, page: page })
      .then(response => this.parser.parse(response));
  }

  // https://www.goodreads.com/api/index#author.show   —   Get info about an author by id.
  async authorShow(authorId) {
    return this.fetch('author/show.xml', { id: authorId })
      .then(response => this.parser.parse(response));
  }

  // https://www.goodreads.com/api/index#book.isbn_to_id   —   Get Goodreads book IDs given ISBNs.
  // TODO

  // https://www.goodreads.com/api/index#book.id_to_work_id   —   Get Goodreads work IDs given Goodreads book IDs.
  // TODO

  // https://www.goodreads.com/api/index#owned_books.create   —   Add to books owned.
  // TODO

  // https://www.goodreads.com/api/index#owned_books.list   —   List books owned by a user.
  async ownedBooksList(userId, page = 1) { // TODO OAUTH
    return this.fetch(`owned_books/user?format=xml`, { id: userId, page: page })
      .then(response => this.parser.parse(response));
  }

  // https://www.goodreads.com/api/index#owned_books.show   —   Show an owned book.
  // TODO

  // https://www.goodreads.com/api/index#owned_books.update   —   Update an owned book.
  // TODO

  // https://www.goodreads.com/api/index#owned_books.destroy   —   Delete an owned book.
  // TODO

  // https://www.goodreads.com/api/index#reviews.list   —   Get the books on a members shelf.
  async reviewList(userId, name, perPage = process.env.PER_PAGE) {
    return this.fetch(`review/list/${userId}.xml`, { v: 2, shelf: name, per_page: perPage })
      .then(response => this.parser.parse(response));
  }

  // https://www.goodreads.com/api/index#series.show   —   See a series.
  async seriesShow(seriesId) {
    return this.fetch(`series/show/${seriesId}.xml`, {})
      .then(response => this.parser.parse(response));
  }

  // https://www.goodreads.com/api/index#series.list   —   See all series by an author.
  async seriesList(authorId) { // series/list?format=xml&id=AUTHOR_ID 
    return this.fetch(`series/list?format=xml&id=${authorId}`, {})
      .then(response => this.parser.parse(response));
  }

  // https://www.goodreads.com/api/index#series.work   —   See all series a work is in.
  async seriesWork(workId) { // series/list?format=xml&id=AUTHOR_ID 
    return this.fetch(`series/work/${workId}?format=xml`, {})
      .then(response => this.parser.parse(response));
  }

  // https://www.goodreads.com/api/index#shelves.add_to_shelf   —   Add a book to a shelf.
  // TODO

  // https://www.goodreads.com/api/index#shelves.add_books_to_shelves   —   Add books to many shelves.
  // TODO

  // https://www.goodreads.com/api/index#shelves.list   —   Get a user's shelves.
  async shelfList(userId, page = 1) {
    return this.fetch('shelf/list.xml', { user_id: userId, page: page })
      .then(response => this.parser.parse(response));
  }

  // https://www.goodreads.com/api/index#user_shelves.create   —   Add book shelf.
  // TODO

  // https://www.goodreads.com/api/index#user_shelves.update   —   Edit book shelf.
  // TODO


  // https://www.goodreads.com/api/index#work.editions   —   See all editions by work.
  // TODO

  /////////////////////////////////////////////
  // master fetch
  /////////////////////////////////////////////
  async fetch(path, payload) {
    const now = this.getMillis();
    if (now - this.lastFetchMS < 1000) {
      console.log('>>> Whoa! Slow Down!', now);
    }
    this.lastFetchMS = this.getMillis();
    const qs = {
      key: process.env.GOODREADS_KEY,
      ...payload,
    }
    console.log(`fetch '${path}'`, qs);
    let options = {
      method: 'GET',
      uri: `https://www.goodreads.com/${path}`,
      qs: qs
    }
    
    return request(options).then(async (responseXML) => {
      // if(responseXML.status !== 200)
      // {
      //    throw new Error(responseXML.status)
      // }

      if (this.options.dumpXML === true) {
        console.log('fetched xml: ', responseXML);
      }
      if (this.options.noparse === true) {
        console.log('not parsing...')
        return new Promise(function(resolve, reject) { resolve({not: 'my', seg: 'fault'}); });
      }
      return xml2js.parseStringPromise(responseXML /* this.xmlOptions */ )
        .then(result => {
          let resp = new Response(result)
          // console.log('grapi response object:', resp);
          return resp;
        });
    }).catch(err => console.error(err));
  }

  getMillis() {
    let now = new Date();
    return now.getTime() + now.getMilliseconds();
  }

}

module.exports = {
  GRAPI,
};


// https://www.goodreads.com/api/index#author_following.create   —   Follow an author.
// https://www.goodreads.com/api/index#author_following.destroy   —   Unfollow an author.
// https://www.goodreads.com/api/index#author_following.show   —   Show author following information.
// https://www.goodreads.com/api/index#book.review_counts   —   Get review statistics given a list of ISBNs.
// https://www.goodreads.com/api/index#book.show   —   Get the reviews for a book given a Goodreads book id.
// https://www.goodreads.com/api/index#book.show_by_isbn   —   Get the reviews for a book given an ISBN.
// https://www.goodreads.com/api/index#book.title   —   Get the reviews for a book given a title string.
// https://www.goodreads.com/api/index#comment.create   —   Create a comment.
// https://www.goodreads.com/api/index#comment.list   —   List comments on a subject.
// https://www.goodreads.com/api/index#events.list   —   Events in your area.
// https://www.goodreads.com/api/index#fanship.create   —   Become fan of an author. DEPRECATED.
// https://www.goodreads.com/api/index#fanship.destroy   —   Stop being fan of an author. DEPRECATED.
// https://www.goodreads.com/api/index#fanship.show   —   Show fanship information. DEPRECATED.
// https://www.goodreads.com/api/index#followers.create   —   Follow a user.
// https://www.goodreads.com/api/index#followers.destroy   —   Unfollow a user.
// https://www.goodreads.com/api/index#friend.confirm_recommendation   —   Confirm or decline a friend recommendation.
// https://www.goodreads.com/api/index#friend.confirm_request   —   Confirm or decline a friend request.
// https://www.goodreads.com/api/index#friend.requests   —   Get friend requests.
// https://www.goodreads.com/api/index#friends.create   —   Add a friend.
// https://www.goodreads.com/api/index#group.join   —   Join a group.
// https://www.goodreads.com/api/index#group.list   —   List groups for a given user.
// https://www.goodreads.com/api/index#group.members   —   Return members of a particular group.
// https://www.goodreads.com/api/index#group.search   —   Find a group.
// https://www.goodreads.com/api/index#group.show   —   Get info about a group by id.
// https://www.goodreads.com/api/index#list.book   —   Get the listopia lists for a given book.
// https://www.goodreads.com/api/index#notifications   —   See the current user's notifications.
// https://www.goodreads.com/api/index#quotes.create   —   Add a quote.
// https://www.goodreads.com/api/index#rating.create   —   Like a resource.
// https://www.goodreads.com/api/index#rating.destroy   —   Unlike a resource.
// https://www.goodreads.com/api/index#read_statuses.show   —   Get a user's read status.
// https://www.goodreads.com/api/index#recommendations.show   —   Get a recommendation from a user to another user.
// https://www.goodreads.com/api/index#review.create   —   Add review.
// https://www.goodreads.com/api/index#review.edit   —   Edit a review.
// https://www.goodreads.com/api/index#review.destroy   —   Delete a book review.
// https://www.goodreads.com/api/index#review.recent_reviews   —   Recent reviews from all members..
// https://www.goodreads.com/api/index#review.show   —   Get a review.
// https://www.goodreads.com/api/index#review.show_by_user_and_book   —   Get a user's review for a given book.
// https://www.goodreads.com/api/index#search.authors   —   Find an author by name.
// https://www.goodreads.com/api/index#search.books   —   Find books by title, author, or ISBN.
// https://www.goodreads.com/api/index#topic.create   —   Create a new topic via OAuth.
// https://www.goodreads.com/api/index#topic.group_folder   —   Get list of topics in a group's folder.
// https://www.goodreads.com/api/index#topic.show   —   Get info about a topic by id.
// https://www.goodreads.com/api/index#topic.unread_group   —   Get a list of topics with unread comments.
// https://www.goodreads.com/api/index#updates.friends   —   Get your friend updates.
// https://www.goodreads.com/api/index#user.show   —   Get info about a member by id or username.
// https://www.goodreads.com/api/index#user.compare   —   Compare books with another member.
// https://www.goodreads.com/api/index#user.followers   —   Get a user's followers.
// https://www.goodreads.com/api/index#user.following   —   Get people a user is following.
// https://www.goodreads.com/api/index#user.friends   —   Get a user's friends.
// https://www.goodreads.com/api/index#user_status.create   —   Update user status.
// https://www.goodreads.com/api/index#user_status.destroy   —   Delete user status.
// https://www.goodreads.com/api/index#user_status.show   —   Get a user status.
// https://www.goodreads.com/api/index#user_status.index   —   View user statuses.