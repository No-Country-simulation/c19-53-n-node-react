const mongoose = require('mongoose');

const dbUrl = 'mongodb://127.0.0.1:27017/JustPay';

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("Conectado a Mongo");
  } catch (error) {
    console.log(error);
  }
}
module.exports = connectDB;
