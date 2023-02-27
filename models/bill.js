const mongoose = require('mongoose')


const billSchema = new mongoose.Schema({
    name: String,
    departmentId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'clients.departments'
    }],
    clientId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'clients'
    }],
    sumRub: Number(),
    signedAt: mongoose.Schema.Types.Date,
    payBefore: mongoose.Schema.Types.Date,
    fileUrl: String

})

module.exports = mongoose.model('Bill', billSchema, 'bills')
