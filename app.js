const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/itemRoutes');
const billRoutes = require('./routes/billRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

//mongodb 
mongoose.connect('mongodb+srv://asthatsimple02:malik663@cluster0.ohafpjj.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/items', itemRoutes);
app.use('/bills', billRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});