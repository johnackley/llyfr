const fs = require('fs');
const xml2js = require('xml2js');
const { Response } = require('../response');
const { ShelfListResponse } = require('../shelf-list-response');

const method = 'shelf_list'
let response;

beforeAll(async () => {
  const responseXML = fs.readFileSync(`test-data/${method}.xml`, 'utf8');
  return xml2js.parseStringPromise(responseXML)
    .then(result => {response = new Response(result);});
});

test('verify message type', () => {
  expect(response.method).toBe(method);
});

test('shelf-list-response parse', () => {
  const actual = new ShelfListResponse(response);
  expect(actual).toBeDefined();
});
