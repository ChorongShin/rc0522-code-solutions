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
  const { name, course } = req.body;
  const score = parseInt(req.body.score, 10);

  if (!name || !course || !score) {
    res.status(400).json({
      error: '"name, course, score" are required fields'
    });
    return;
  }

  if (score < 0) {
    res.status(400).json({
      error: 'Score must be a positive integer from 1 to 100'
    });
    return;
  }

  const sql = `
  insert into "grades" ("name", "course", "score")
  values($1, $2, $3)
  returning *`;

  const params = [name, course, score];

  db.query(sql, params)
    .then(result => {
      const [grade] = result.rows;
      // const grade = result.rows[0]
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
  const gradeId = Number(req.params.gradeId);

  if (!Number.isInteger(gradeId) || gradeId < 0) {
    res.status(400).json({
      error: '"gradeId" must be positive integer'
    });
    return;
  }

  const { name, course } = req.body;
  const score = parseInt(req.body.score, 10);

  if (!name || !course || !score) {
    res.status(400).json({
      error: '"name, course, score" are required fields'
    });
    return;
  }

  if (score < 0) {
    res.status(400).json({
      error: 'Score must be a positive integer from 1 to 100'
    });
    return;
  }

  const sql = `
          update "grades"
          set "name" = $1
              "course" = $2,
              "score" = $3
          where "gradeId" = $4
          returning *`;

  const params = [name, course, score, gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      // const [grade] = result.rows

      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.status(200).json(grade);
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
      error: '"gradeId" must be positive integer'
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
      // const [grade] = result.rows
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
