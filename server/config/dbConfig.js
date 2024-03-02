const mongoose = require('mongoose');
const config = require('./config.js');

async function dbConnect() {
    await mongoose.connect(config.dbURL);
}

module.exports = dbConnect;