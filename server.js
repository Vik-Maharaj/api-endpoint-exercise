const express = require('express');

const termData = require('./terms.json');

const PORT = 3001;

const app = express();

app.get('/', (req, res) => {
  console.log(req);
  res.send('Hello, World!');
});

app.get('/html', (req, res) => {
  console.log(req);
  console.log(__dirname);
  res.sendFile(__dirname + '/index.html');
});

app.get('/api', (req, res) => {
  res.json(termData);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});