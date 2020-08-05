const mongoose = require('mongoose')
const FavouriteSchema = new mongoose.Schema({
  image: {
    type: String,
    // required: true,
  },
  title: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true
  },
  _userId: {
    type: String,
    // required: true
  }
}, {

})
const Favourite = mongoose.model('Favourite', FavouriteSchema);
module.exports = { Favourite }