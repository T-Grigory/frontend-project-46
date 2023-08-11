#!/usr/bin/env node

import { program } from 'commander';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference')
  .helpOption('-h --help', 'output usage information')
  .version('0.1.0', '-V, --version', 'output the version number');

program
  .option('-f --format <type>', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>');
program.parse();
