const fs = require('fs');
const xml2js = require('xml2js');
const { AuthorShowResponse } = require('../author-show-response');

const method = 'author_show'
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
  const actual = new AuthorShowResponse(payload);
  expect(actual).toBeDefined();
});
