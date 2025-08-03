import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {
  try {
    if (!process.env.CLOUDINARY_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_SECRET_KEY) {
      console.warn("Cloudinary credentials not found. Image uploads will not work.");
      return;
    }
    
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_SECRET_KEY,
    });
    
    console.log("Cloudinary connected");
  } catch (error) {
    console.error("Failed to connect to Cloudinary:", error.message);
  }
};

export default connectCloudinary;