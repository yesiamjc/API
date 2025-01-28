const mongoose = require('mongoose');
require('dotenv').config();

const dbConnectionUrl = process.env.DB_CONNECTION_URL;

mongoose.connect(dbConnectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected successfully');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

module.exports = mongoose;