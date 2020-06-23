const fs = require('fs');
const xml2js = require('xml2js');
const { Response } = require('../response');
const { AuthorListResponse } = require('../author-list-response');

const method = 'author_list'
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
  const actual = new AuthorListResponse(response);
  expect(actual).toBeDefined();
});

test('author-ref parse', () => {
  const msg = new AuthorListResponse(response);
  const actual = msg.author_books;
  expect(actual).toBeDefined();
});

test('author id parse', () => {
  const msg = new AuthorListResponse(response);
  const actual = msg.author_books;
  expect(actual.author_ref).toBeDefined();
  expect(actual.author_ref.id).toBe('42705');
});

test('author id parse', () => {
  const msg = new AuthorListResponse(response);
  const actual = msg.author_books.author_ref;
  expect(actual).toBeDefined();
  expect(actual.id).toBe('42705');
});

test('author books parse', () => {
  const msg = new AuthorListResponse(response);
  const actual = msg.author_books.books;
  expect(actual).toBeDefined();
  expect(actual.length).toBe(9);
});
