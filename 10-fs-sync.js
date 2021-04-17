const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

writeFileSync(
  './content/demo-sync.js',
  `//this is a demo text ${first} ${second}`,
  { flag: 'a' }
);
