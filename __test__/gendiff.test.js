import gendiff from '../src/gendiff';

import path from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const directoryPath = `${__dirname}/../__fixtures__`;

let expectedNested;

beforeAll(() => {
  expectedNested = readFileSync(`${directoryPath}/nested.txt`).toString();
});

test('gendiff nested', () => {
  const actual = gendiff(
    `${directoryPath}/nested1.json`,
    `${directoryPath}/nested2.json`
  );

  expect(actual).toEqual(expectedNested);
});
