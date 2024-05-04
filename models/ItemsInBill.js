const mongoose = require('mongoose');

const itemsInBillSchema = new mongoose.Schema({
  billId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bill',
  },
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',
  },
  quantitySold: {
    type: Number,
    required: true,
  },
});

const ItemsInBill = mongoose.model('ItemsInBill', itemsInBillSchema);

module.exports = ItemsInBill;