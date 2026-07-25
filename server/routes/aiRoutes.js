import express from "express";
import protect from "../middleware/authMiddleware.js";
import { 
    generateAbout , 
     generateProjectDescription ,
     generateResume ,
     aiChat,
    } from "../controllers/aiController.js";

const router = express.Router();

router.post("/about", protect, generateAbout);
router.post( "/project-description", protect, generateProjectDescription );
router.post( "/resume", protect, generateResume );
router.post("/chat",protect, aiChat);

export default router;