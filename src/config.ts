import inquirer from 'inquirer';

const promptList = [
  {
    type: 'list',
    name: 'frame',
    message: 'please choose this project template',
    choices: ['vue', 'react'],
  },
  {
    type: 'checkbox',
    name: 'typescript',
    message: 'do you want to use typescript?',
    choices: ['yes', 'no'],
  },
];

export { promptList };
