const fs = require('fs');
const xml2js = require('xml2js');
const { Response } = require('../response');
const { SeriesListResponse } = require('../series-list-response');

const method = 'series_list'
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
  const actual = new SeriesListResponse(response);
  expect(actual).toBeDefined();
  expect(actual.series_works).toBeDefined();
  expect(actual.series_works.length).toBe(16);
  expect(actual.series_works[0]).toBeDefined();
});

test('basic element data', () => {
  const resp = new SeriesListResponse(response);
  const actual = resp.series_works[0];
  expect(actual.id).toBe('1476298');
  expect(actual.user_position).toBe('1');
  expect(actual.series).toBeDefined();
  expect(actual.work).toBeDefined();
});

test('basic series data', () => {
  const resp = new SeriesListResponse(response);
  const actual = resp.series_works[0].series;
  expect(actual.id).toBe('268322');
  expect(actual.title).toBe('5-Minute Sherlock');
});

test('basic work data', () => {
  const resp = new SeriesListResponse(response);
  const actual = resp.series_works[0].work;
  expect(actual.id).toBe('71235979');
  expect(actual.uri).toBe('kca://work/amzn1.gr.work.v1.SGy9mhe5QazMiTepBCZO9g');
  expect(actual.best_book).toBeDefined();
});

test('basic best-book data', () => {
  const resp = new SeriesListResponse(response);
  const actual = resp.series_works[0].work.best_book;
  expect(actual.id).toBe('46253321');
  expect(actual.title).toBe('The Case of the Damaged Detective (5-Minute Sherlock, #1)');
});
