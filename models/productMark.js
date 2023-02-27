const mongoose = require('mongoose')

const productMarkSchema =  new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

})

module.exports = mongoose.model('productMark', productMarkSchema)
