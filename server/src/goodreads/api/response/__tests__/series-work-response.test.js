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
  expect(actual.work_series).toBeDefined();
});

// test('work_ref data', () => {
//   const resp = new SeriesWorkResponse(response);
//   const actual = resp.work_series.work_ref;
//   expect(actual.id).toBe('12');
//   expect(actual.uri).toBe('xyz');
// });

test('array parse', () => {
  const resp = new SeriesWorkResponse(response);
  const actual = resp.work_series;
  expect(actual).toBeDefined();
  expect(actual.series_entries).toBeDefined();
  expect(actual.series_entries.length).toBe(3);
});

test('element data', () => {
  const resp = new SeriesWorkResponse(response);
  const actual = resp.work_series.series_entries[0];

  expect(actual.id).toBe('166801');
  expect(actual.user_position).toBe('1');
});

test('element series_ref data', () => {
  const resp = new SeriesWorkResponse(response);
  const actual = resp.work_series.series_entries[0].series_ref;

  expect(actual.id).toBe('45935');
  expect(actual.title).toBe('Dune');
  expect(actual.series_works_count).toBe(31);
});
