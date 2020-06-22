const fs = require('fs');
const xml2js = require('xml2js');
const { Response } = require('../response');
const { SeriesWorkResponse } = require('../series-work-response');

const method = 'series_work'
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
  const actual = new SeriesWorkResponse(response);
  expect(actual).toBeDefined();
  expect(actual.series_works).toBeDefined();
  expect(actual.series_works.length).toBe(3);
});

test('basic element data', () => {
  const ary = new SeriesWorkResponse(response);
  const actual = ary.series_works[0];
  expect(actual.id).toBe('166801');
  expect(actual.user_position).toBe('1');
  expect(actual.series).toBeDefined();
  expect(actual.series.length).toBe(1);
});

test('basic element data', () => {
  const ary = new SeriesWorkResponse(response);
  const actual = ary.series_works[0].series[0];
  expect(actual.id).toBe('45935');
  expect(actual.title).toBe('Dune');
  expect(actual.series_works_count).toBe(31);
});
