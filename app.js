const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/itemRoutes');
const billRoutes = require('./routes/billRoutes');

const app = express();
const PORT = process.env.PORT || 3000;


mongoose.connect('mongodb+srv://asthatsimple02:malik663@cluster0.ohafpjj.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());


app.use('/items', itemRoutes);
app.use('/bills', billRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});