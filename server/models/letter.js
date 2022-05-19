const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Letter = new Schema ({
    id: { type: String, required: true },
    box: { type: String, required: true },
    date: { type: String, required: true},
    status: { type: String, required: true },
    sender: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true }
});

module.exports = mongoose.model('Letter', Letter)