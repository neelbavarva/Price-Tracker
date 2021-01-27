const mongoose = require('mongoose')

const infoSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
});

module.exports = mongoose.model('Info', infoSchema);