const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    name: {
        type: String,
        min: 3,
        max: 20,
    },
    full_name: {
        type: String,
        min: 3,
        max: 20,
    },
    email: {
        type: String,
        max: 50,
        unique: true,
        sparse: true
    },
    icon_url: {
        type: String,
        max: 100,
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
    },
    date_of_birth: { type: Date },
    about: {
        type: String,
        max: 150,
    },
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('users', UserSchema);
