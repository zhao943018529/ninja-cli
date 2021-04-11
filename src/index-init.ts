#!/usr/bin/env node
import { program, Option } from 'commander';
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { promptList } from './config';

program
  .action(async (pName: string, cmd) => {
    let projectName: string = program.args[0]
    const fullPath = path.join(process.cwd(), projectName);
    console.log(fullPath);
    if (fs.existsSync(fullPath)) {
      console.log(
        chalk.red(
          `The ${pName} project already exists in  directory. Please try to use another projectName`
        )
      );
      process.exit(1);
    } else {
      inquirer.prompt(promptList).then((val) => {
        console.log(val);
      });
    }
  })
  .usage('<project-name>')
  .parse(process.argv);
// let projectName: string = program.args[0];
// const options = program.opts();
// console.log(JSON.stringify(options));
// if (!projectName) {
//   program.help();
// } else {
//   if (!fs.existsSync(projectName)) {
//     fs.mkdirSync(
//       path.resolve(
//         process.cwd(),
//         path.join('.', `${projectName}_${options.template}`)
//       )
//     );
//   } else {
//     program.help();
//   }
// }
