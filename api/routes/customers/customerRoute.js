const express = require('express');

const { getAllCustomers, getCustomerById } = require('./customerService');

const router = express.Router();
router.route('/')
  .get(async (req, res) => {
    try {
      const customers = await getAllCustomers();
      res.json({ data: customers });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      res.sendStatus(500).json({ message: 'unable to get customer' });
    }
  });

router.route('/:id')
  .get(async (req, res) => {
    try {
      const { params } = req;
      const customer = await getCustomerById(params.id);
      res.json({ data: customer });
    } catch (err) {
      console.log(err);
      res.sendStatus(500).json({ message: 'internal server error' });
    }
  });

module.exports = router;
