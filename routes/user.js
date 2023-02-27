const express = require('express')
const userRouter = express.Router()
const User = require('../models/user')
const mongoose = require("mongoose");

//Getting all +
userRouter.get('/', async(req,res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
//Getting one
userRouter.get('/:id', async (req,res) => {
    const user = await User.findOne({id: mongoose.Schema.Types.ObjectId})
    res.json(user)
})
//Creating one
userRouter.post('/create', async (req, res) => {
    const user = new User({
        email: req.body.email,
        name: req.body.name,
        isActive: req.body.isActive,
        password: req.body.password,
        roles: req.body.roles
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
        console.log(" Успешно создан")
    } catch(error) {
        res.status(400)
        console.log(error)
    }
})
//Update one
userRouter.patch('/update/:id', async (req,res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        await user.save()
        res.json(user)
    } catch(error) {
        res.status(500).send(error)
    }
})
//Delete one
userRouter.delete('/delete/:id', async (req,res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user) {
            res.status(404).send("Нет предмета для удаления по данным параметрам")
        } else {
            res.status(200).send("Удаление прошло успешно")
        }
    } catch(error) {
        res.status(500).send(error)
    }
})

module.exports = userRouter
