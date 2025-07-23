// Import mongoose library
const mongoose = require("mongoose");

// Create async function to connect to MongoDB
const connectDB = async () => {
  try {
    // Connect to MongoDB using the URI from environment variables
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,        // Use new URL parser (recommended)
      useUnifiedTopology: true,     // Use new server discovery and monitoring engine
    });

    // Log success message with host info
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // If connection fails, log error and exit process
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit with failure code
  }
};

// Export the connectDB function to use in index.js
module.exports = connectDB;
