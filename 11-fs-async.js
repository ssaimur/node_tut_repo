const { readFile, writeFile } = require('fs');

console.log('task starts here');
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      './content/demo-async.txt',
      `Here goes the result : ${first} ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('task ends here');
      }
    );
  });
});
console.log('next task starts');
