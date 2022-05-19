const mongoose = require('mongoose');
const uri = "mongodb+srv://admin:admin@cluster0.khm4l.mongodb.net/?retryWrites=true&w=majority";

const connectDB = () => {
    mongoose.connect(uri)
        .then(() => console.log('MongoDB has connected'))
        .catch(e => console.error(e))
}

module.exports = connectDB;