const express = require('express')
const Product = require("../models/product")
const mongoose = require("mongoose")
const User = require("../models/user");
const productRouter = express.Router()


//Getting all
productRouter.get('/', async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})
//Getting one
productRouter.get('/:id', async(req,res) => {
    const product = await Product.findOne({id: mongoose.Schema.Types.ObjectId})
    res.json(product)
})
//Creating one
productRouter.post('/create', async (req,res) => {
    const product = new Product({
        supplerId: req.body.supplerId,
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        categoryId: req.body.categoryId,
        priceRub: req.body.priceRub,
        country: req.body.country,
        isVisible: req.body.isVisible,
        manufacturer:req.body.manufacturer,
        volumeL: req.body.volumeL,
        weightKg: req.body.weightKg,
        style: req.body.style,
        fitting: req.body.fitting,
        alcoholVolume: req.body.alcoholVolume,
        packSize: req.body.packSize,
        imageId: req.body.imageId,
        imageUrl: req.body.imageUrl,
    })
    try {
        const newProduct = await product.save()
        res.status(201).json(newProduct)
        console.log("Продукт сохранен")
    } catch(error) {
        res.status(400)
        console.log(error)
    }
})
//Update one
productRouter.patch('/update/:id', async (req,res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body)
        await product.save()
        res.json(product)
    } catch(error) {
        res.status(500).send(error)
    }
})
//Delete one
productRouter.delete('/delete/:id', async (req,res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if(!product) {
            res.status(404).send("Нет предмета для удаления по данным параметрам")
        } else {
            res.status(200).send("Удаление прошло успешно")
        }
    } catch(error) {
        res.status(500).send(error)
    }
})

module.exports = productRouter
