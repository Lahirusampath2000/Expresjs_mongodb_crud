const express = require('express')
const mongoose = require('mongoose');

const app = express()

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

app.get('/', (req, res) => {
  res.send('Hello Worhhjmld!');
});