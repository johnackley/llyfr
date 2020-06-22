const fs = require('fs');
const xml2js = require('xml2js');
const { SeriesWorkResponse } = require('../series-work-response');

const method = 'series_work'
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
  const actual = new SeriesWorkResponse(payload);
  expect(actual).toBeDefined();
});

test('basic data', () => {
  const actual = new SeriesShowResponse(payload);
  expect(actual.series.id).toBe('45935');
  expect(actual.series.title).toBe('Dune');
  expect(actual.series.series_works_count).toBe(31);
  expect(actual.series.primary_work_count).toBe(8);
  expect(actual.series.numbered).toBe(true);
  expect(actual.series.series_works).toBeDefined();
  expect(actual.series.series_works.length).toBe(31);
});
