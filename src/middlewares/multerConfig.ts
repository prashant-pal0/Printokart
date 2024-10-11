// src/middleware/multerConfig.ts
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinaryConfig";

// Define storage settings for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "PrintoKart" as string, // Folder name in Cloudinary
    allowed_formats: ["jpg", "png", "jpeg"],
    transformation: [{ width: 500, height: 500, crop: "limit" }],
  } as any,
});

// Initialize Multer with Cloudinary storage
const upload = multer({ storage });

export default upload;
