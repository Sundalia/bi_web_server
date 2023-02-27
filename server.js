const express = require('express');

const app = express()
require('./db/db_connection')
app.use(express.json())

app.use(express.urlencoded({ extended: true}))

//import routes
const productRouter = require('./routes/product')
app.use('/products', productRouter)
const userRouter = require('./routes/user')
app.use('/users', userRouter)
const billRouter = require('./routes/bill')
app.use('/bills', billRouter)

//main route
app.get('/', (req, res) => {
    res.send('Home')
})

app.listen(5000, () => console.log(`Server started`))
