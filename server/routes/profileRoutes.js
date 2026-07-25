import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  createOrUpdateProfile,
  getMyProfile,
} from "../controllers/profileController.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// Create or Update Profile
router.put("/", protect, upload.single("avatar"), createOrUpdateProfile);

// Get Logged-in User Profile
router.get("/me", protect, getMyProfile);

export default router;