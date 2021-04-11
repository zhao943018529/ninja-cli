#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program
  .version('0.0.1')
  .usage('<command> [项目名称]')
  .command('init', '创建新项目')
  .alias('i');

program.parse(process.argv);
