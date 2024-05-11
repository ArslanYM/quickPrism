const express = require('express');
const router = express.Router();



const Bill = require('../models/Bill');
const Item = require('../models/Item');

router.post('/', async (req, res) => {
  try {
    const items = req.body.items;
    let total = 0;

    for (const item of items) {
      const currentItem = await Item.findById(item.itemId);
      if (!currentItem || currentItem.quantity < item.quantity) {
        return res.status(400).json({ message: 'Invalid item or insufficient quantity' });
      }
      total += item.quantity;
      currentItem.quantity -= item.quantity; // update items quantity
      await currentItem.save(); // save updated item quantity to database
    }


    
    const newBill = new Bill({
      items: items.map(item => item.itemId),
      total: total,
    });
    await newBill.save();
    res.status(201).json(newBill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//get all bills
router.get('/', async (req, res) => {
  try {
    const bills = await Bill.find();
    res.json(bills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//get bill by id 
router.get('/:id', async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id);
    if (!bill) {
      return res.status(404).json({ message: 'Bill not found' });
    }
    res.json(bill);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;