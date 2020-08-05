const { Favourite } = require('../models/favourite.model')

const getFavourite = async (req, res) => {
  const userId = req.params.userId
  await Favourite.find({ _userId: userId }).then(doc => res.send(doc))
}

const addFavourite = async (req, res) => {
  const userId = req.params.userId
  const { image, title } = req.body
  let newFavourite = new Favourite({
    image, title, _userId: userId
  })
  newFavourite.save().then(doc => res.send(doc))
}
const deleteFavourite = async (req, res) => {
  const userId = req.params.userId
  const id = req.params.id
  await Favourite.findOneAndRemove({ _userId: userId, _id: id }).then(doc => res.send(doc))
}
const modifyFavourite = async (req, res) => {
  const userId = req.params.userId
  const id = req.params.id
  const updatedFav = await Favourite.findOneAndUpdate({ _userId: userId, _id: id }, req.body)
  res.status(204).send(updatedFav)
}

module.exports = {
  addFavourite, getFavourite, deleteFavourite, modifyFavourite
}