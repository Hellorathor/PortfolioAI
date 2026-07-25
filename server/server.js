import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

import profileRoutes from "./routes/profileRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";

import portfolioRoutes from "./routes/portfolioRoutes.js";


import analyticsRoutes from "./routes/analyticsRoutes.js";

const app=express();

// connect DataBase
connectDB();
import cloudinary from "./config/cloudinary.js";

(async () => {
  try {
    const result = await cloudinary.uploader.upload(
      "https://res.cloudinary.com/demo/image/upload/sample.jpg"
    );

    console.log("Cloudinary Test Success");
    console.log(result.secure_url);
  } catch (err) {
    console.log("Cloudinary Test Failed");
    console.log(err);
  }
})();
//midleware 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

//connect frontend to backend
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));
//TEST ROUTES 
app.get("/",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"PortFolio api is running "
    });
});

// api call
app.use("/api/auth",authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/ai", aiRoutes);

app.use("/api/portfolio", portfolioRoutes);

app.use("/api/analytics", analyticsRoutes);


const PORT = process.env.PORT ||5000
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));
