const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
    names: String,
    first_surname: String,
    second_surname: String,
    user_name: String,
    run: String,
    email: String,
    password: String
});

module.exports = mongoose.model('User', User);