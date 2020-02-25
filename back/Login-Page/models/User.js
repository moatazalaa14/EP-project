const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    passowrd: {
        type: String,
        required: true
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    date: {
        type: Date,
        default: Date.now
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = {
    User
} 