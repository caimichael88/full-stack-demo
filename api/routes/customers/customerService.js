const Customers = require('./customerModel');

exports.getAllCustomers = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const customers = await Customers.find();
    return customers;
  } catch (err) {
    throw err;
  }
};

exports.getCustomerById = async (id) => {
  try {
    console.log('Id: ', id);
    const customer = await Customers.findById(id);
    console.log(customer);
    return customer;
  } catch (err) {
    console.log(err);
  }
};
