const fs = require('fs');
const xml2js = require('xml2js');
const { AuthorListResponse } = require('../author-list-response');

const method = 'author_list'
let payload;

beforeAll(async () => {
  const responseXML = fs.readFileSync(`test-data/${method}.xml`, 'utf8');
  return xml2js.parseStringPromise(responseXML)
    .then(result => {payload = result.GoodreadsResponse;});
});

test('verify message type', () => {
  expect(payload.Request[0].method[0]).toBe(method);
});

test('basic parse', () => {
  const actual = new AuthorListResponse(payload);
  expect(actual).toBeDefined();
});
