const mongoose = require("mongoose");
require("dotenv").config();

const ConnectDataBase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
module.exports = ConnectDataBase;
