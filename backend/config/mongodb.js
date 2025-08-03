import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI environment variable is not defined");
    }
    
    mongoose.connection.on("connected", () => console.log("Database connected"));
    mongoose.connection.on("error", (err) => console.error("Database connection error:", err));
    mongoose.connection.on("disconnected", () => console.log("Database disconnected"));
    
    await mongoose.connect(`${process.env.MONGODB_URI}/medicare`);
  } catch (error) {
    console.error("Failed to connect to database:", error.message);
    process.exit(1);
  }
};

export default connectDB;

// Do not use '@' symbol in your databse user's password else it will show an error.
