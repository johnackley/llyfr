const request = require('request-promise');
const { Parser } = require('./goodreads');

require('dotenv').config();

let options = {
    method: 'GET',
    uri: `https://www.goodreads.com/review/list/${process.env.GOODREADS_USER_ID}.xml`,
    qs: {
        key: process.env.GOODREADS_KEY,
        v: process.env.GOODREADS_VERSION,
        shelf: process.env.SHELF,
        per_page: process.env.PER_PAGE
    }
}

const parser = new Parser();
request(options).then(async (response) => {
  // console.log(response);
  const thing = await parser.parse(response);
  console.log(JSON.stringify(thing, null, 1));
}).catch(err => console.error(err));