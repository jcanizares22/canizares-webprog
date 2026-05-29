const mongoose = require('mongoose');
const dns = require('dns');

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;

    if (uri && uri.startsWith('mongodb+srv://')) {
      dns.setServers(['8.8.8.8', '1.1.1.1']);
      console.log('Using public DNS servers for SRV resolution: 8.8.8.8, 1.1.1.1');
    }

    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;