import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
import cloudinary from "./config/cloudinary.js";

import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import portfolioRoutes from "./routes/portfolioRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";

const app = express();

// ================= Middleware =================
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ================= Test Route =================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "PortfolioAI API is running 🚀",
  });
});

// ================= Routes =================
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/analytics", analyticsRoutes);

// ================= Start Server =================
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    console.log("☁️ Testing Cloudinary...");

    try {
      await cloudinary.uploader.upload(
        "https://res.cloudinary.com/demo/image/upload/sample.jpg"
      );
      console.log("✅ Cloudinary Connected");
    } catch (err) {
      console.error("❌ Cloudinary Error:", err.message);
    }

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Server Startup Failed");
    console.error(err);
    process.exit(1);
  }
};

startServer();