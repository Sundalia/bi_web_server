const mongoose = require('mongoose')

const departmentSchema = new mongoose.Schema({
    supplerId: String,
    name: String,
    kpp: {
        type: String,
        required: false
    },
    paymentPeriod: Int
})

const clientSchema =  new mongoose.Schema({
    inn: String,
    legalName: String,
    departments: {
        type: Array,
        ref: 'departmentSchema'
    },
    contactName: String,
    phone: String,

})
//Creating model Client with clientSchema and bind collection "beer_insiders/clients"
module.exports = mongoose.model('Client', clientSchema, 'clients')
