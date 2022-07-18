const express = require('express');
const path = require('path');
const app = express();

// app.use(express.static(path.join(__dirname, 'public')));

// Class Solution
const publicPath = path.join(__dirname, 'public');
console.log('public path:', publicPath);
const staticMiddleware = express.static(publicPath);
console.log('staticMidleware:', staticMiddleware);
app.use(staticMiddleware);

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
