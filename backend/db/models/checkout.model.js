const mongoose = require('mongoose')
const CheckOutSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number
  },
  _userId: {
    type: String,
    required: true
  }
}, {

})
const CheckOut = mongoose.model('CheckOut', CheckOutSchema);
module.exports = { CheckOut }