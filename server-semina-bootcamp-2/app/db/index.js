const mongoose = require('mongoose');

const { urlDb } = require('../utils/config');

mongoose.connect(urlDb);

const db = mongoose.connection;

module.exports = db;