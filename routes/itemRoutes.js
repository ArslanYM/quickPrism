const express = require('express');
const router = express.Router();



const Item = require('../models/Item');
  
//add item
router.post('/', async (req, res) => {
  try {
    const newItem = new Item({
      name: req.body.name,
      quantity: req.body.quantity,
    });
    await newItem.save();
    res.status(201).json("New item added : " + newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//get all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;