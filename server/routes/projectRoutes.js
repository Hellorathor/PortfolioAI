
import express from "express";
import protect from "../middleware/authMiddleware.js";
import { addProject,getMyProject , updateProject,deleteProject, } from "../controllers/projectController.js";
import upload from "../middleware/uploadMiddleware.js";
const router=express.Router();

// Create Project
router.post("/", protect, upload.single("image"), addProject);

router.get("/",protect,getMyProject);
// Update Project
router.put("/:id", protect, upload.single("image"), updateProject);

router.delete("/:id", protect, deleteProject);

export default router; 