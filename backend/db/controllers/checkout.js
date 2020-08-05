const { CheckOut } = require('../models/checkout.model')

const getAllCheckouts = async (req, res) => {
  const items = await CheckOut.find()
  res.send(items)
}

const getCheckout = async (req, res) => {
  const userId = req.params.userId
  await CheckOut.find({ _userId: userId }).then(checkouts => res.send(checkouts))

}

const addCheckout = async (req, res) => {
  const userId = req.params.userId
  const { image, title, price, quantity } = req.body
  let newCheckOut = new CheckOut({
    image, title, price, quantity, _userId: userId
  })
  newCheckOut.save().then(doc => res.send(doc))
}
const deleteCheckout = async (req, res) => {
  const userId = req.params.userId
  const id = req.params.id
  await CheckOut.findOneAndRemove({ _userId: userId, _id: id }).then(doc => res.send(doc))
}
const modifyCheckout = async (req, res) => {
  const userId = req.params.userId
  const id = req.params.id
  const updatedCheckout = await CheckOut.findOneAndUpdate({ _userId: userId, _id: id }, req.body)
  res.status(204).send(updatedCheckout)
}

module.exports = {
  getCheckout, addCheckout, getAllCheckouts, deleteCheckout, modifyCheckout
}