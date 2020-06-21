const { ImageURL } = require('../image-url');

test('image-url simple string', () => {
  const expected = 'foobar';
  const iu = new ImageURL(expected);
  expect(iu.url).toBe(expected);
});

test('image-url stupid xml tricks', () => {
  const expected = 'foobar';
  const iu = new ImageURL({ _: expected, '$': { nophoto: 'false' } });
  expect(iu.url).toBe(expected);
  expect(iu.nophoto).toBeFalsy();
});

test('image-url stupid xml tricks w/ nophoto', () => {
  const expected = 'foobar';
  const iu = new ImageURL({ _: expected, '$': { nophoto: 'true' } });
  expect(iu.url).toBe(expected);
  expect(iu.nophoto).toBeTruthy();
});

test('image-url empty uri', () => {
  const expected = '';
  const iu = new ImageURL({ uri: expected });
  expect(iu.url).toBe(expected);
});

test('image-url uri', () => {
  const expected = 'foobar';
  const iu = new ImageURL({ uri: expected });
  expect(iu.url).toBe(expected);
});

test('image-url who puts newlines in urls?', () => {
  const expected = 'foobar';
  const iu = new ImageURL({ uri: `\n${expected}\n` });
  expect(iu.url).toBe(expected);
});
