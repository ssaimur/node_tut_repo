const names = require('./4-names');
const helloSaim = require('./5-utils');
const data = require('./6-alt-flavor');
require('./7-mind-grenade');

console.log(data);

const { saim, saim2 } = names;

helloSaim('kire beda');
helloSaim(saim);
helloSaim(saim2);
