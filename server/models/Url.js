const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    site: String,
    url: String,
    price: Number,
});

module.exports = mongoose.model('Product', productSchema);