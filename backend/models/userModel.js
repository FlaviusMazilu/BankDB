const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    country: {
      type: String,
      required: true,
    },
    sold: {
      type: Number,
      default: 0,
    },
    transactions: {
      type: [{
        sender: String,
        receiver: String,
        amount: Number
      }],
      default: []
    }
});
const User = mongoose.model('User', userSchema);

module.exports = User;
