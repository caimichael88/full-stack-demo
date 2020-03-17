const express = require('express');
const mongoose = require('mongoose');
const customerRoute = require('./api/routes/customers/customerRoute');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use('/api/customer', customerRoute);

mongoose.connect('mongodb+srv://michael:4235063@cluster0-hkvm6.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
  app.listen('8080', () => {
    console.log('server is running on 8080');
  });
});
