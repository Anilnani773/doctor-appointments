import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";


dotenv.config();

// Debug: Check environment variables
console.log("Environment check:");
console.log("NODE_ENV:", process.env.NODE_ENV || 'development');

// Set fallback JWT_SECRET for development
if (!process.env.JWT_SECRET) {
  process.env.JWT_SECRET = "your_jwt_secret_key_for_development_only_change_in_production";
  console.log("Using fallback JWT_SECRET for development");
}

console.log("JWT_SECRET exists:", !!process.env.JWT_SECRET);
console.log("JWT_SECRET length:", process.env.JWT_SECRET ? process.env.JWT_SECRET.length : 0);
console.log("MONGODB_URI exists:", !!process.env.MONGODB_URI);

// app config
const app = express();
const PORT = process.env.PORT || 5000;
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, token, aToken, dToken');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(cors({
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'token', 'aToken', 'dToken']
}));

// api endpoints
app.use("/api/admin", adminRouter); // loalhost:5000/api/admin/add-doctor
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.json({ 
    message: "API working correctly",
    status: "healthy",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

app.get("/health", (req, res) => {
  res.json({ 
    status: "healthy",
    database: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
    timestamp: new Date().toISOString()
  });
});

// start the express app
app.listen(PORT, () => console.log("server started", PORT));
