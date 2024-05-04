const express = require('express');
const router = express.Router();
const Bill = require('../models/Bill');
const ItemsInBill = require('../models/ItemsInBill');


router.post('/', async (req, res) => {
  const { items, totalAmount } = req.body;
  const newBill = new Bill({ totalAmount });

  try {
    const savedBill = await newBill.save();

    for (const item of items) {
      const { itemId, quantitySold } = item;
      const itemsInBill = new ItemsInBill({
        billId: savedBill._id,
        itemId,
        quantitySold,
      });
      await itemsInBill.save();
    }

    res.status(201).json(savedBill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.get('/', async (req, res) => {
  try {
    const bills = await Bill.find();
    res.json(bills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id);
    if (!bill) return res.status(404).json({ message: 'Bill not found' });

    const itemsInBill = await ItemsInBill.find({ billId: bill._id });
    res.json({ bill, itemsInBill });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;