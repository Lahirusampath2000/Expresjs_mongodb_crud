const express = require('express')
const mongoose = require('mongoose');

const app = express()



app.get('/', (req, res) => {
  res.send('Hello Worhhjmld!');
});

mongoose.connect("mongodb+srv://admin:admin@cruddb.bbhdm.mongodb.net/Node-Crud?retryWrites=true&w=majority&appName=cruddb")
 .then(() => {
   console.log('Connected to MongoDB');
   app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
 })
 .catch((err) => {
   console.log('Failed to connect to MongoDB', err);
 });