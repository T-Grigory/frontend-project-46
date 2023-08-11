#!/usr/bin/env node

import { program } from 'commander';

program
  .name('generator diff')
  .description('Compares two configuration files and shows a difference')
  .helpOption('-h --help', 'output usage information')
  .version('0.1.0', '-V, --version', 'output the version number');

program.parse();