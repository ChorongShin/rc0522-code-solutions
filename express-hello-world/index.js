const express = require('express');
const app = express();

app.use(function (req, res) {
  // console.log(req);
  res.send('It is working!');
});

app.listen(3000, () => {
  // console.log('Express server listening on port 3000');
});
