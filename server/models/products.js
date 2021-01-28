const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    username: String,
    url: String,
    site: String,
    price: Number,
});

module.exports = mongoose.model('Product', productSchema);