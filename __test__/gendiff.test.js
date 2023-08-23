import gendiff from '../src/gendiff';

import path from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const directoryPath = `${__dirname}/../__fixtures__`;

let expected;

beforeAll(() => {
  expected = readFileSync(`${directoryPath}/plain.txt`).toString();
});

test('gendiff plain json files', () => {
  const actual = gendiff(
    `${directoryPath}/file1.json`,
    `${directoryPath}/file2.json`
  );

  expect(actual).toEqual(expected);
});

test('gendiff plain yml files', () => {
  const actual = gendiff(
    `${directoryPath}/file1.yml`,
    `${directoryPath}/file2.yml`
  );

  expect(actual).toEqual(expected);
});
