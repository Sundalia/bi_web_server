const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    supplerId: String,
    name: String,
    type: [],
    typeGroupId:{
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    description:{
        type: String,
        required: false
    },
    categoryId: mongoose.Schema.Types.ObjectId,
    priceRub: Number(0),
    country:{
        type: String,
        required: false
    },
    isVisible: Boolean,
    manufacturer:{
        type: String,
        required: false
    },
    volumeL:{
        type: String,
        required: false
    },
    weightKg: Number,
    style: {
        type: String,
        required: false
    },
    fitting:{
        type: String,
        required: false
    },
    alcoholVolume: Number(0),
    packSize: Number,
    imageId: {
        type: String,
        required: false
    },
    imageUrl:{
        type: String,
        required: false
    },
})
//Creating model Product with productSchema and bind collection "beer_insiders/products"
module.exports = mongoose.model('Product', productSchema, 'products')
