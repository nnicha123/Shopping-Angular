const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const userRoutes = require('./db/routes/user')
const checkoutRoutes = require('./db/routes/checkout')
const favouriteRoutes = require('./db/routes/favourite')

// Connect to mongoDB
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/shoppingAngular', { useNewUrlParser: true }).then(() => {
  console.log('Connected to mongodb successfully')
}).catch(err => console.log(err))
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)

const app = express()

// Middlewares
app.use(bodyParser.json())
app.use(cors())
// Include model routes
app.use('/users', userRoutes)
app.use('/', checkoutRoutes)
app.use('/', favouriteRoutes)

app.get('/', (req, res) => {
  res.send('Hello new app')
})

app.listen(3000, () => console.log('Listening on 3000'))