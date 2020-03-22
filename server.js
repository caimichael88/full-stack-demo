const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const customerRouter = require('./api/routes/customers/customerRoute');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/customers', customerRouter);

const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://michael:4235063@cluster0-hkvm6.mongodb.net/debt-management-dev?retryWrites=true&w=majority';

app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

mongoose.connect(MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
  app.listen(PORT, () => {
    console.log('server is running on 8080');
  });
}).catch((err) => {
  console.log(err);
});
