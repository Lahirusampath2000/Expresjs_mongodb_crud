const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js')

const app = express()

app.use('express.json');

app.get('/', (req, res) => {
  res.send('Hello Worhhjmld!');
});

app.post('/api/products', async(req, res) => {
  try {
    const product= await Product.create(req.body);
    res.status(200),json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
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