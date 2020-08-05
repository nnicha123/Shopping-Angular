const express = require('express')
const router = express.Router()
const checkoutController = require('../controllers/checkout')

router.get('/', (req, res) => {
  res.send('Checkout get ')
})

module.exports = router