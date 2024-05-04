const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
});

const Bill = mongoose.model('Bill', billSchema);

module.exports = Bill;