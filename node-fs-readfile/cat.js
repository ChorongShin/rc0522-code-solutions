const fs = require('fs');
const filename = process.argv;

for (let index = 2; index < filename.length; index++) {
  let read = '';
  fs.readFile(filename[index], 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    }

    read += data;
    console.log(read);
  });
}

// function processDoll(doll) {
// 1) base case -stoping condition
// if (found the piece of chocolate) {
//   return'yum yum';
// }
// 2) base case fails, recursive call to itself
// else if (there are no more dolls) {
// return 'no chocolate here'
// }
// else
// processDoll(the smaller doll)
// }

function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(4));
