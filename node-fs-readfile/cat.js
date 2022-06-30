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
