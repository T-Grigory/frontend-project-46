import path from 'node:path';
import { readFileSync } from 'node:fs';
import yaml from 'js-yaml';
import _ from 'lodash';

const EXTENSION_NAME = {
  json: '.json',
  yml: ['.yml', '.yaml'],
};

export default (filepath) => {
  const extensionName = path.extname(filepath);
  const data = readFileSync(path.resolve(filepath), 'utf-8').toString();

  if (extensionName === EXTENSION_NAME.json) {
    return JSON.parse(data);
  } else if (EXTENSION_NAME.yml.includes(extensionName)) {
    return yaml.load(data);
  }
};
