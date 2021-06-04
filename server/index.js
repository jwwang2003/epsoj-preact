const path = require('path');
const express = require('express');

const app = express();

app.get(['/admin*', '/app*'], (req, res) => {
  // Protect secure content
  res.redirect('/login');
});

app.use(express.static("build"));

app.get('*', function (request, response) {
  response.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(5000, () => console.log("start"));