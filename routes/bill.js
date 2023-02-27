const mongoose = require("mongoose")
const express = require('express')
const Bill = require("../models/bill")
const Product = require("../models/product");
const billRouter = express.Router()


//Getting all
billRouter.get('/', async (req, res) => {
    try {
        const bills = await Bill.find()
        res.json(bills)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})
//Getting one
billRouter.get('/:id', async(req,res) => {
    const bill = await Bill.findOne({id: mongoose.Schema.Types.ObjectId})
    res.json(bill)
})
//Creating one
billRouter.post('/create', async (req,res) => {
    const bill = new Bill({
        name: req.body.name,
        departmentId: req.body.departmentId,
        clientId: req.body.clientId,
        sumRub: req.body.sumRub,
        signedAt: req.body.signedAt,
        payBefore: req.body.payBefore,
        fileUrl: req.body.fileUrl
    })
    try {
        const newBill = await bill.save()
        res.status(201).json(newBill)
        console.log("Успешно создано")
    } catch(error) {
        res.status(400)
        console.log(error)
    }
})
//Update one
billRouter.patch('/update/:id', async (req,res) => {
    try {
        const bill = await Bill.findByIdAndUpdate(req.params.id, req.body)
        await bill.save()
        res.json(bill)
    } catch(error) {
        res.status(500).send(error)
    }
})
//Delete one
billRouter.delete('/delete/:id', async (req,res) => {
    try {
        const bill = await Bill.findByIdAndDelete(req.params.id)
        if(!bill) {
            res.status(404).send("Нет предмета для удаления по данным параметрам")
        } else {
            res.status(200).send("Удаление прошло успешно")
        }
    } catch(error) {
        res.status(500).send(error)
    }
})

module.exports = billRouter
