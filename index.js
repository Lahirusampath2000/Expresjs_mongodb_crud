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

app.get('/api/products', async(req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
    
  } catch (error) {
    res.status(500).json({ error: error.message });
    
  }
});

qpp.get('/api/products/:id', async(req, res) => {
  try {
    const { id } = req.params;
    const product=await Product.findById(id);
  } catch (error) {
    req.status(500).json({ error: error.message });
  }
});

//api for update

app.put('/api/products/:id', async(req, res) => {
  try {
    const { id } = req.params;
    const product=await Product.findByIdAndUpdate(id, req.body);

    if(!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//delete api
app.delete('/api/products/:id', async(req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if(!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });

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