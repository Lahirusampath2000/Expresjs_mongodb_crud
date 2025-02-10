const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        required: [true,"Please enter product name"]
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    description: {
        type: String,
        required: [true,"Please enter product description"]
    },
    image: {
        type: String,
        required: false
    },
    Timestamp: true
    

}
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
    

