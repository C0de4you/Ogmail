require('dotenv').config({ path: './variables.env' });
const cors = require('cors');
const express = require('express');
const connectDB = require('./MongoDB')
const api = require('./Api');
const app = express();

const serve = () => {

    connectDB();

    const url = new URL(process.env.REACT_APP_API_URI);
    const port = url.port;

    app.use(cors(), express.json(), api);

    app.listen(port, () => {
        console.log(`Server listening on ${port}!`);
    });

}

module.exports = serve;