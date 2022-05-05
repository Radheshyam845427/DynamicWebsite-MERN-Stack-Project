const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    address: String,
    message: String
});

module.exports = mongoose.model("contacts", contactSchema);