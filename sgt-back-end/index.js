const pg = require('pg');
const express = require('express');
const app = express();
app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
  `;

  db.query(sql)
    .then(result => {
      const grades = result.rows;
      // console.log('result:', result);
      // console.log('result.rows:', result.rows);

      res.json(grades);
    }).catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred'
      });
    });

});

app.get('/api/grades/:gradeId', (req, res, next) => {

  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {

    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }

  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
      where "gradeId" = $1
  `;

  const params = [gradeId];

  db.query(sql, params)
    .then(result => {

      const grade = result.rows[0];
      // console.log('result:', result);
      // console.log('result.rows:', result.rows);
      // console.log('what is grade:', grade);
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {

        res.json(grade);
      }
    })
    .catch(err => {

      console.error(err);

      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = parseInt(req.body.score, 10);

  if (!req.body.name) {
    res.status(400).json({ error: 'Name is a required field' });
    return;
  } else if (!req.body.course) {
    res.status(400).json({ error: 'Course is a required field' });
    return;
  } else if (!req.body.score) {
    res.status(400).json({ error: 'Score is a required field' });
    return;
  } else if (!Number.isInteger(req.body.score) || req.body.score < 0 || req.body.score > 100) {
    res.status(400).json({ error: 'Score has to be an integer from 0 to 100' });
    return;
  }

  const text = 'insert into grades(name, course, score) values($1, $2, $3) returning *';
  const values = [name, course, score];

  db.query(text, values)
    .then(result => {
      const grade = result.rows[0];
      // console.log('result:', result);
      // console.log('result.rows:', result.rows);
      // console.log('grade:', grade);
      res.status(201).json(grade);

    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'The query may fail'
      });
    });

});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = parseInt(req.body.score, 10);
  const gradeId = Number(req.params.gradeId);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be positive integer'
    });
    return;
  } else if (!req.body.name) {
    res.status(400).json({
      error: 'Name is a required field'
    });
    return;
  } else if (!req.body.course) {
    res.status(400).json({
      error: 'Course is a required field'
    });
    return;
  } else if (!req.body.score) {
    res.status(400).json({
      error: 'Score is a required field'
    });
    return;
  } else if (!Number.isInteger(req.body.score) || req.body.score < 0 || req.body.score > 100) {
    res.status(400).json({ error: 'Score has to be an integer from 0 to 100' });
    return;
  }

  const sql = `
          update grades
          set "name" = $2,
              "course" = $3,
              "score" = $4
          where "gradeId" = $1
          returning *`;

  // const text = 'UPDATE grades(name, course, score) SET($1, $2, $3) WHERE gradeId = $4';
  // const values = [name, course, score];
  const params = [gradeId, name, course, score];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      // console.log('Is the array empty?', result.rows.length === 0);
      // console.log('result:', result);
      // console.log('result.rows', result.rows);
      // console.log('grade:', grade);

      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred'
      });
    });

});

app.delete('/api/grades/:gradeId', (req, res) => {

  const gradeId = Number(req.params.gradeId);

  if (!Number.isInteger(gradeId) || gradeId < 0) {
    res.status(400).json({
      error: '"gradeId" must be positive integer or invalid gradeId'
    });
    return;
  }

  const sql = `
  delete from "grades"
  where "gradeId" = $1
  returning *
  `;
  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.sendStatus(204);
      }
    }).catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });

});

app.listen(3000, () => {
  // console.log('Express server listening on port 3000');
});
