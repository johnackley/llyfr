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
  expect(actual.author_series).toBeDefined();
  expect(actual.author_series.series.length).toBe(16);
  expect(actual.author_series.series[0]).toBeDefined();
});

test('author info', () => {
  const actual = new SeriesListResponse(response);
  expect(actual).toBeDefined();
  expect(actual.author_series).toBeDefined();
  expect(actual.author_series.author_ref).toBeDefined();
  expect(actual.author_series.author_ref.id).toBe('7077654');
  expect(actual.author_series.author_ref.name).toBe('Drew  Hayes');
});

test('basic element data', () => {
  const resp = new SeriesListResponse(response);
  const actual = resp.author_series.series[0];
  expect(actual.id).toBe('1476298');
  expect(actual.user_position).toBe('1');
  expect(actual.series).toBeDefined();
  expect(actual.work).toBeDefined();
});

test('basic series data', () => {
  const resp = new SeriesListResponse(response);
  const actual = resp.author_series.series[0].series;
  expect(actual.id).toBe('268322');
  expect(actual.title).toBe('5-Minute Sherlock');
});

test('basic work data', () => {
  const resp = new SeriesListResponse(response);
  const actual = resp.author_series.series[0].work;
  expect(actual.id).toBe('71235979');
  expect(actual.uri).toBe('kca://work/amzn1.gr.work.v1.SGy9mhe5QazMiTepBCZO9g');
  expect(actual.best_book).toBeDefined();
});

test('basic best-book data', () => {
  const resp = new SeriesListResponse(response);
  const actual = resp.author_series.series[0].work.best_book;
  expect(actual.id).toBe('46253321');
  expect(actual.title).toBe('The Case of the Damaged Detective (5-Minute Sherlock, #1)');
});
