const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item'
  }],
  total: Number,
  timestamp: { type: Date, default: Date.now }
});

const Bill = mongoose.model('Bill', billSchema);

module.exports = Bill;