const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// system uptime method
const uptime = os.uptime();
console.log(uptime);

// info about my operating system
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
