const mongoose = require('mongoose');

const dbUrl = 'mongodb://localhost:27017/JustPay';

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log(`Conectado a Mongo URL: ${dbUrl}`);
  } catch (error) {
    console.log(error);
  }
}
module.exports = connectDB;
