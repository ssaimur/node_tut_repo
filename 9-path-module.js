const path = require('path');
console.log(path.sep);

const filepath = path.join('content/', '/subcontent', 'text.txt');
console.log(filepath);

const baseName = path.basename(filepath);
console.log(baseName);

const absolute = path.resolve(__dirname, 'content', 'subcontent', 'text.txt');
console.log(absolute);
