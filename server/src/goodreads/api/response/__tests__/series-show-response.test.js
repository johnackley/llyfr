const fs = require('fs');
const xml2js = require('xml2js');
const { Response } = require('../response');
const { SeriesShowResponse } = require('../series-show-response');

const method = 'series_show'
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
  const actual = new SeriesShowResponse(response);
  expect(actual).toBeDefined();
  expect(actual.series).toBeDefined();
});

test('basic data', () => {
  const actual = new SeriesShowResponse(response);
  expect(actual.series.id).toBe('45935');
  expect(actual.series.title).toBe('Dune');
  expect(actual.series.series_works_count).toBe(31);
  expect(actual.series.primary_work_count).toBe(8);
  expect(actual.series.numbered).toBe(true);
  expect(actual.series.series_works).toBeDefined();
  expect(actual.series.series_works.length).toBe(31);
});
