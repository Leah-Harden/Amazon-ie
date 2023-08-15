const db = require('../config/connection');
const Product = require('../models/Product.js');
const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const productData = require('./productSeed.json');
const userData = require('./userSeed.json');


db.once('open', async () => {
  await User.deleteMany({});
  await Product.deleteMany({});

  // Iterate over the parentData and hash the passwords before seeded them 
  const users = await Promise.all(userData.map(async (user) => {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    return {
      ...user,
      password: hashedPassword
    };
  }));

  //this seeded all the data and console log it back!
  await User.insertMany(users);
  console.log('users seeded!');

  await Product.insertMany(productData);
  console.log('products Seeded!');

  process.exit(0);
});