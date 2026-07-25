import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema(
  {
    // Owner
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    // Public URL
    slug: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
    },

    // Portfolio Title
    title: {
      type: String,
      default: "My Portfolio",
      trim: true,
    },

    // Selected Template
    template: {
      type: String,
      default: "modern",
    },

    // Publish Status
    published: {
      type: Boolean,
      default: false,
    },

    // Theme Settings
    theme: {
      mode: {
        type: String,
        enum: ["light", "dark"],
        default: "light",
      },

      accentColor: {
        type: String,
        default: "#2563eb",
      },

      fontFamily: {
        type: String,
        default: "Inter",
      },
    },

    // SEO
    seo: {
      title: {
        type: String,
        default: "",
      },

      description: {
        type: String,
        default: "",
      },

      keywords: {
        type: [String],
        default: [],
      },
    },

    // Social Links
    socialLinks: {
      github: String,
      linkedin: String,
      twitter: String,
      website: String,
    },

    // Resume
    resumeUrl: {
      type: String,
      default: "",
    },

    // Portfolio Data Snapshot
    profileSnapshot: {
      type: Object,
      default: {},
    },

    projectSnapshot: {
      type: [Object],
      default: [],
    },

    // Analytics
    views: {
      type: Number,
      default: 0,
    },

    // Version
    version: {
      type: Number,
      default: 1,
    },

    // Publish Date
    publishedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Portfolio", portfolioSchema);