const fs = require('fs');

const text = process.argv[2] + '\n';

fs.writeFile('note.txt', text, 'utf8', err => {
  if (err) {
    console.error(err);
  }
});
