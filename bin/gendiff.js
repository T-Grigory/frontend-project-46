#!/usr/bin/env node

import { program } from 'commander';
import gendiff from '../src/gendiff.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference')
  .helpOption('-h --help', 'output usage information')
  .version('0.1.0', '-V, --version', 'output the version number');

program
  .option('-f --format <type>', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2) => {
    console.log(gendiff(filepath1, filepath2));
  });
program.parse();
