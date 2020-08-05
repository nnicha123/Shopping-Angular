const express = require('express')
const router = express.Router()
const checkoutController = require('../controllers/checkout')

router.get('/', (req, res) => {
  res.send('Checkout get ')
})

router.get('/checkouts', checkoutController.getAllCheckouts)
router.get('/:userId/checkouts', checkoutController.getCheckout)
router.post('/:userId/checkouts', checkoutController.addCheckout)
router.delete('/:userId/checkouts/:id', checkoutController.deleteCheckout)
router.put('/:userId/checkouts/:id', checkoutController.modifyCheckout)

module.exports = router