const mongoose = require('mongoose')

const userSchema =  new mongoose.Schema({
    roles: [{
        type: Array,
        body: ['admin', 'manager', 'system', 'moderator'],
        default: ['moderator']
    }],
    email: String,
    name: String,
    isActive: Boolean,
    password: String,
    created: {
        type: mongoose.Schema.Types.Date,
        default: Date.now()
    },
    modified: {
        type: mongoose.Schema.Types.Date,
        default: Date.now()
    }
})
//Creating model User with userSchema and bind collection "beer_insiders/users"
module.exports = mongoose.model('User', userSchema, 'users')
