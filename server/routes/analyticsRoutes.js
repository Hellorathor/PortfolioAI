import express from "express";
import { getAnalytics } from "../controllers/analyticsController.js";
import  protect  from "../middleware/authMiddleware.js";

const router = express.Router();

// Get Analytics of Logged-in User's Portfolio
router.get("/:portfolioId", protect, getAnalytics);

export default router;