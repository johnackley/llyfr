const fs = require('fs');
const xml2js = require('xml2js');
const { ShelfListResponse } = require('../shelf-list-response');

const method = 'shelf_list'
let payload;

beforeAll(async () => {
  const responseXML = fs.readFileSync(`test-data/${method}.xml`, 'utf8');
  return xml2js.parseStringPromise(responseXML)
    .then(result => {payload = result.GoodreadsResponse;});
});

test('verify message type', () => {
  expect(payload.Request[0].method[0]).toBe(method);
});

test('shelf-list-response parse', () => {
  const actual = new ShelfListResponse(payload);
  expect(actual).toBeDefined();
});
