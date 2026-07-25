import Portfolio from "../models/Portfolio.js";
import Profile from "../models/Profile.js";
import Project from "../models/Project.js";
import { trackPortfolioView } from "./analyticsController.js";
// Generate Portfolio
export const generatePortfolio = async (req, res) => {
  try {
    const userId = req.user._id;

    const profile = await Profile.findOne({ user: userId });

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Please complete your profile first.",
      });
    }

    const projects = await Project.find({ user: userId });

    const slug =
      req.user.name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-") +
      "-" +
      req.user._id.toString().slice(-5);

    const portfolio = await Portfolio.findOneAndUpdate(
      { user: userId },
      {
        user: userId,
        slug,
      profileSnapshot: {
     ...profile.toObject(),
     name: req.user.name,
    },
        projectSnapshot: projects.map((project) => project.toObject()),
      },
      {
        new: true,
        upsert: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Portfolio generated successfully.",
      portfolio,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Publish Portfolio
export const publishPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOneAndUpdate(
      { user: req.user._id },
      {
        published: true,
      },
      {
        new: true,
      }
    );

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: "Generate your portfolio first.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Portfolio published successfully.",
      portfolio,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get My Portfolio
export const getMyPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({
      user: req.user._id,
    });

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: "Portfolio not found.",
      });
    }

    res.status(200).json({
      success: true,
      portfolio,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Public Portfolio
export const getPublicPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({
      slug: req.params.slug,
      published: true,
    });

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: "Portfolio not found.",
      });
    }

    const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress ||
    req.ip;
    
       // Track analytics
    await trackPortfolioView(portfolio._id, ip);

    res.status(200).json({
      success: true,
      portfolio,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Portfolio Template
export const updateTemplate = async (req, res) => {
  try {
    const { template } = req.body;

    const allowedTemplates = [
      "modern",
      "creative",
      "glass",
      "developer",
    ];

    if (!allowedTemplates.includes(template)) {
      return res.status(400).json({
        success: false,
        message: "Invalid template selected.",
      });
    }

    const portfolio = await Portfolio.findOneAndUpdate(
      { user: req.user._id },
      { template },
      { new: true }
    );

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: "Generate your portfolio first.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Template updated successfully.",
      portfolio,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};