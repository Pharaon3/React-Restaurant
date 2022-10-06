const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let orderSchema = new Schema({
  userName: {
    type: String
  },
  userPhone: {
    type: Number
  },
  userEmail: {
    type: String
  },
  totalPrice: {
    type: Number
  }
}, {
    collection: 'order'
  })

module.exports = mongoose.model('order', orderSchema)