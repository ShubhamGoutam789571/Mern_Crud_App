const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb://localhost:27017/OurstudentData",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log(`mongoDB Connected ${connect.connection.host}`);
  } catch (error) {
    console.log(`error ${error.message}`);
  }
};

module.exports = connectDB;
