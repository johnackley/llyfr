const fs = require('fs');
const xml2js = require('xml2js');
const { Response } = require('../response');
const { AuthorShowResponse } = require('../author-show-response');

const method = 'author_show'
let response;

beforeAll(async () => {
  const responseXML = fs.readFileSync(`test-data/${method}.xml`, 'utf8');
  return xml2js.parseStringPromise(responseXML)
    .then(result => {response = new Response(result);});
});

test('verify message type', () => {
  expect(response.method).toBe(method);
});

test('basic parse', () => {
  const actual = new AuthorShowResponse(response);
  expect(actual).toBeDefined();
});
