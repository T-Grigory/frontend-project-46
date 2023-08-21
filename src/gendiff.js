import path from 'node:path';
import { readFileSync } from 'node:fs';
import _ from 'lodash';

const getNormalizeData = (filePath) => {
  return JSON.parse(readFileSync(filePath).toString());
};

const gendiff = (filepath1, filepath2) => {
  const [absoluteFilePath1, absoluteFilePath2] = [
    path.resolve(filepath1),
    path.resolve(filepath2),
  ];

  const data1 = getNormalizeData(absoluteFilePath1);
  const data2 = getNormalizeData(absoluteFilePath2);
  const keys = _.sortBy(_.uniq([...Object.keys(data1), ...Object.keys(data2)]));

  const formattedData = keys.reduce((accumulator, key) => {
    if (_.has(data1, key) && !_.has(data2, key)) {
      accumulator.push(`- ${key}: ${data1[key]}`);
    } else if (!_.has(data1, key) && _.has(data2, key)) {
      accumulator.push(`+ ${key}: ${data2[key]}`);
    } else if (data1[key] !== data2[key]) {
      accumulator.push(`- ${key}: ${data1[key]}`);
      accumulator.push(`+ ${key}: ${data2[key]}`);
    } else {
      accumulator.push(`  ${key}: ${data1[key]}`);
    }
    return accumulator;
  }, []);
  const result = `{\n${formattedData.join('\n')}\n}\n`;
  return result;
};

export default gendiff;
