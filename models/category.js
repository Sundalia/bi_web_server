const mongoose = require('mongoose')


const categorySchema = new mongoose.Schema({
   name: String,
   order: {
       type: String,
       required: false
   },
   imageUrl: {
       type: String,
       required: false
   },
   isVisible: Boolean
})

module.exports = mongoose.model('Category', categorySchema, 'categories')
