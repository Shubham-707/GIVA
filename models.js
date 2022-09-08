//schema for database

const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    date: {
        type: String,
    },
    state: {
        type: String,
    },
    fips: {
        type: String,
    },
    cases: {
        type: String,
    },
    deaths: {
        type: String,
    }
})

const User = new mongoose.model('User', UserSchema);
module.exports = User;