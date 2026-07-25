import express from "express";
import {
  generatePortfolio,
  publishPortfolio,
  getMyPortfolio,
  getPublicPortfolio,
  updateTemplate,
} from "../controllers/portfolioController.js";

import protect  from "../middleware/authMiddleware.js";

const router = express.Router();

// Generate Portfolio
router.post("/generate", protect, generatePortfolio);

// Publish Portfolio
router.put("/publish", protect, publishPortfolio);

// Logged-in User Portfolio
router.get("/me", protect, getMyPortfolio);

// Public Portfolio
router.get("/:slug", getPublicPortfolio);
// Update Portfolio Template
router.patch("/template", protect, updateTemplate);

export default router;