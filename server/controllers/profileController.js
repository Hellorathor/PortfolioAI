import Profile from "../models/Profile.js";
import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

// Upload Avatar to Cloudinary
const uploadToCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "portfolioai/profile",
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );

    streamifier.createReadStream(fileBuffer).pipe(stream);
  });
};

// Create / Update Profile
export const createOrUpdateProfile = async (req, res) => {
  try {
    const {
      headline,
      designation,
      about,
      location,
      phone,
      email,
      availability,
      resumeUrl,

      skills,
      languages,

      experience,
      education,
      certificates,
      achievements,

      github,
      linkedin,
      website,
      twitter,
      instagram,
      facebook,
      youtube,
      leetcode,
      hackerrank,
      codeforces,
    } = req.body;

    let profile = await Profile.findOne({
      user: req.user._id,
    });

    // Keep existing avatar
    let avatar = profile?.avatar ?? {
      url: "",
      public_id: "",
    };

    // Upload new avatar
    if (req.file) {
      const uploadedAvatar = await uploadToCloudinary(req.file.buffer);

      avatar = {
        url: uploadedAvatar.secure_url,
        public_id: uploadedAvatar.public_id,
      };
    }

    const updateData = {};

    // Basic Info
    if (phone !== undefined) updateData.phone = phone;
    if (email !== undefined) updateData.email = email;
    if (headline !== undefined) updateData.headline = headline;
    if (designation !== undefined) updateData.designation = designation;
    if (about !== undefined) updateData.about = about;
    if (location !== undefined) updateData.location = location;
    if (availability !== undefined) updateData.availability = availability;
    if (resumeUrl !== undefined) updateData.resumeUrl = resumeUrl;

    // Avatar
    updateData.avatar = avatar;

    // Skills
    if (skills !== undefined) {
      if (Array.isArray(skills)) {
        updateData.skills = skills;
      } else if (typeof skills === "string") {
        try {
          // If skills is a JSON string
          updateData.skills = JSON.parse(skills);
        } catch {
          // If skills is a comma-separated string
          updateData.skills = skills
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean);
        }
      } else {
        updateData.skills = [];
      }
    }

    // Languages
    if (languages !== undefined) {
      updateData.languages = Array.isArray(languages)
        ? languages
        : languages
        ? languages.split(",").map((l) => l.trim())
        : [];
    }

    // Experience
    if (experience !== undefined) {
      updateData.experience =
        typeof experience === "string"
          ? JSON.parse(experience)
          : experience;
    }

    // Education
    if (education !== undefined) {
      updateData.education =
        typeof education === "string"
          ? JSON.parse(education)
          : education;
    }

    // Certificates
    if (certificates !== undefined) {
      updateData.certificates =
        typeof certificates === "string"
          ? JSON.parse(certificates)
          : certificates;
    }

    // Achievements
    if (achievements !== undefined) {
      updateData.achievements = Array.isArray(achievements)
        ? achievements
        : achievements
        ? achievements.split(",").map((a) => a.trim())
        : [];
    }

    // Social Links
    const socialLinks = {};

    if (github !== undefined) socialLinks.github = github;
    if (linkedin !== undefined) socialLinks.linkedin = linkedin;
    if (website !== undefined) socialLinks.website = website;
    if (twitter !== undefined) socialLinks.twitter = twitter;
    if (instagram !== undefined) socialLinks.instagram = instagram;
    if (facebook !== undefined) socialLinks.facebook = facebook;
    if (youtube !== undefined) socialLinks.youtube = youtube;
    if (leetcode !== undefined) socialLinks.leetcode = leetcode;
    if (hackerrank !== undefined) socialLinks.hackerrank = hackerrank;
    if (codeforces !== undefined) socialLinks.codeforces = codeforces;

    if (Object.keys(socialLinks).length > 0) {
      updateData.socialLinks = {
        ...(profile?.socialLinks?.toObject?.() || profile?.socialLinks || {}),
        ...socialLinks,
      };
    }

    profile = await Profile.findOneAndUpdate(
      { user: req.user._id },
      updateData,
      {
        new: true,
        upsert: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Profile saved successfully",
      profile,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Logged-in User Profile
export const getMyProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user._id,
    }).populate("user", "name email");

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile Not Found",
      });
    }

    res.status(200).json({
      success: true,
      profile,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};