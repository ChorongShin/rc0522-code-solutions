const express = require('express');
const fs = require('fs');
const app = express();

const data = require('./data.json');

app.use(express.json());

app.get('/api/notes', (req, res) => {

  const notesArray = [];
  for (const property in data.notes) {
    notesArray.push(data.notes[property]);
  }
  res.json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  // console.log('params:', req.params);
  const id = Number(req.params.id);
  // console.log('id:', id);

  if (id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (id in data.notes) {
    res.status(200).json(data.notes[id]);
  } else {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  }

});

app.post('/api/notes', (req, res) => {
  const content = req.body;

  // console.log('what is this?', req.body.content);
  const id = data.nextId;
  if (req.body.content) {
    data.nextId++;
    content.id = id;
    data.notes[id] = content;
    res.status(201).json(content);
  } else {
    res.status(400).json({ error: 'content is a required field' });
  }

  const updatedData = JSON.stringify(data);
  fs.writeFile('data.json', updatedData, 'utf8', err => {

    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    }

  });

});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!data.notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    delete data.notes[id];
    const updatedData = JSON.stringify(data);
    fs.writeFile('data.json', updatedData, 'utf8', err => {

      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
      }

    });
    res.sendStatus(204);
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const content = req.body;

  if (id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (!data.notes[id] && req.body.content) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else if (data.notes[id] && req.body.content) {
    content.id = id;
    data.notes[id] = content;
    const updatedData = JSON.stringify(data);
    fs.writeFile('data.json', updatedData, 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
      }

    });

    res.status(201).json(content);
  }
});

app.listen(3000, () => {
  // console.log('Express server listening on port 3000');
});
