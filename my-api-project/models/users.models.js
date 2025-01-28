const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    customerId: {
        type: String,
        required: true,
        unique: true
    },
    userName: {
        type: String,
        required: true
    },
    userRole: {
        type: String,
        enum: ['admin', 'company management', 'user'],
        required: true
    },
    userStayOnline: {
        type: Boolean,
        default: false
    },
    roodId: {
        type: Number,
        required: true
    },
    userPassword: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;