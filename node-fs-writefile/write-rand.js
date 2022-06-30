const fs = require('fs');

const randomNumber = Math.random();
const text = randomNumber + '\n';
fs.writeFile('random.txt', text, 'utf8', err => {
  if (err) {
    console.error(err);
  }

});
