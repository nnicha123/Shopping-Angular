const express = require('express')
const router = express.Router()
const favouriteController = require('../controllers/favourite')

router.get('/:userId/favourites', favouriteController.getFavourite)
router.post('/:userId/favourites', favouriteController.addFavourite)
router.delete('/:userId/favourites/:id', favouriteController.deleteFavourite)
router.put('/:userId/favourites/:id', favouriteController.modifyFavourite)

module.exports = router