require('dotenv').config();
const { GRAPI } = require('./goodreads');

const grapi = new GRAPI();

async function reviewList() {
  const thing = await grapi.reviewList(process.env.GOODREADS_USER_ID, 'to-read', 999);
  console.log(JSON.stringify(thing, null, 1));
}

async function shelfList() {
  const thing = await grapi.shelfList(process.env.GOODREADS_USER_ID);
  console.log(JSON.stringify(thing, null, 1));
}

reviewList();
// shelfList();