import gendiff from '../src/gendiff';

import path from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';

test('gendiff plain file', () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const directoryPath = `${__dirname}/../__fixtures__`;
  const actual = gendiff(
    `${directoryPath}/file1.json`,
    `${directoryPath}/file2.json`
  );

  const expected = readFileSync(`${directoryPath}/plain.txt`).toString();

  expect(actual).toEqual(expected);
});
