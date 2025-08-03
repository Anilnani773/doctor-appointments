import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      console.warn("MONGODB_URI not found, using default localhost connection");
      process.env.MONGODB_URI = "mongodb://localhost:27017";
    }
    
    mongoose.connection.on("connected", () => console.log("Database connected"));
    mongoose.connection.on("error", (err) => {
      console.error("Database connection error:", err.message);
      console.log("Continuing without database connection for development...");
    });
    mongoose.connection.on("disconnected", () => console.log("Database disconnected"));
    
    await mongoose.connect(`${process.env.MONGODB_URI}/medicare`);
  } catch (error) {
    console.error("Failed to connect to database:", error.message);
    console.log("Continuing without database connection for development...");
    // Don't exit the process, let it continue for development
  }
};

export default connectDB;

// Do not use '@' symbol in your databse user's password else it will show an error.
