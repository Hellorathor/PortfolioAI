import Profile from "../models/Profile.js";
import Project from "../models/Project.js";

// Dashboard
export const getDashboard = async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user._id,
    });

    const projects = await Project.find({
      user: req.user._id,
    });

    const featuredProjects = await Project.countDocuments({
      user: req.user._id,
      featured: true,
    });

    // Profile Completion
    let profileCompletion = 0;

    if (profile) {
      if (profile.headline) profileCompletion += 20;
      if (profile.about) profileCompletion += 20;
      if (profile.skills.length > 0) profileCompletion += 20;
      if (profile.github) profileCompletion += 10;
      if (profile.linkedin) profileCompletion += 10;
      if (profile.portfolio) profileCompletion += 10;
      if (profile.location) profileCompletion += 10;
    }

    res.status(200).json({
      success: true,

      dashboard: {
        profileCompletion,
        totalProjects: projects.length,
        featuredProjects,
        recentProjects: projects.slice(0, 5),
        portfolioViews: 0,
        aiSuggestions: [],
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};