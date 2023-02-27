const express = require('express')
const ProductMark = require("../models/productMark");
const productMarkRouter = express.Router()


//Getting all
productMarkRouter.get('/', async (req, res) => {
    try {
        const productMarks = await ProductMark.find()
        res.json(productMarks)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})
//Getting one
productMarkRouter.get('/:id', (req,res) => {
    res.send(req.params.id)
})
//Creating one
productMarkRouter.post('/', (req,res) => {

})
//Update one
productMarkRouter.patch('/:id', (req,res) => {

})
//Delete one
productMarkRouter.delete('/:id', (req,res) => {

})

module.exports = productMarkRouter
