const data = require('./data.json');
const fs = require('fs');

if (process.argv[2] === 'read') {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    const object = JSON.parse(data);
    for (const id in object.notes) {
      console.log(`${id}: ${object.notes[id]}`);
    }
  });
} else if (process.argv[2] === 'create') {
  const noteId = data.nextId;
  const newNote = process.argv[3];
  data.nextId++;
  data.notes[noteId] = newNote;
  const updatedData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', updatedData, 'utf8', err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
} else if (process.argv[2] === 'update') {
  const id = process.argv[3];
  data.notes[id] = process.argv[4];
  const updatedData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', updatedData, 'utf8', err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
} else if (process.argv[2] === 'delete') {
  const id = process.argv[3];
  delete data.notes[id];
  const updatedData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', updatedData, 'utf8', err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
}
