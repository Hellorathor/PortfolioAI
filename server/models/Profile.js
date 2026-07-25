import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
      trim: true,
    },

    role: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      default: "",
      trim: true,
    },

    startDate: {
      type: Date,
    },

    endDate: {
      type: Date,
    },

    currentlyWorking: {
      type: Boolean,
      default: false,
    },

    description: {
      type: String,
      default: "",
    },
  },
  { _id: false }
);

const educationSchema = new mongoose.Schema(
  {
    institution: {
      type: String,
      required: true,
      trim: true,
    },

    degree: {
      type: String,
      required: true,
      trim: true,
    },

    fieldOfStudy: {
      type: String,
      default: "",
      trim: true,
    },

    startYear: Number,

    endYear: Number,

    grade: {
      type: String,
      default: "",
    },
  },
  { _id: false }
);

const certificateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    issuer: {
      type: String,
      default: "",
      trim: true,
    },

    issueDate: Date,

    credentialUrl: {
      type: String,
      default: "",
    },
  },
  { _id: false }
);

const socialLinksSchema = new mongoose.Schema(
  {
    github: {
      type: String,
      default: "",
    },

    linkedin: {
      type: String,
      default: "",
    },

    website: {
      type: String,
      default: "",
    },

    twitter: {
      type: String,
      default: "",
    },

    instagram: {
      type: String,
      default: "",
    },

    facebook: {
      type: String,
      default: "",
    },

    youtube: {
      type: String,
      default: "",
    },

    leetcode: {
      type: String,
      default: "",
    },

    hackerrank: {
      type: String,
      default: "",
    },

    codeforces: {
      type: String,
      default: "",
    },
  },
  { _id: false }
);

const profileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    // ===========================
    // Basic Information
    // ===========================

    headline: {
      type: String,
      default: "",
      trim: true,
    },

    designation: {
      type: String,
      default: "",
      trim: true,
    },

    heroTitle: {
      type: String,
      default: "",
      trim: true,
    },

    heroSubtitle: {
      type: String,
      default: "",
      trim: true,
    },

    about: {
      type: String,
      default: "",
    },

    avatar: {
      url: {
        type: String,
        default: "",
      },

      public_id: {
        type: String,
        default: "",
      },
    },

    // ===========================
    // Contact Information
    // ===========================

    email: {
      type: String,
      default: "",
      trim: true,
    },

    phone: {
      type: String,
      default: "",
      trim: true,
    },

    location: {
      type: String,
      default: "",
      trim: true,
    },

    // ===========================
    // Professional Information
    // ===========================

    company: {
      type: String,
      default: "",
      trim: true,
    },

    yearsOfExperience: {
      type: Number,
      default: 0,
    },

    availability: {
      type: String,
      enum: [
        "Available",
        "Open to Work",
        "Freelancing",
        "Busy",
      ],
      default: "Open to Work",
    },

    resumeUrl: {
      type: String,
      default: "",
    },

    selectedTemplate: {
      type: String,
      default: "modern",
    },

    // ===========================
    // Skills
    // ===========================

    skills: {
      type: [String],
      default: [],
    },

    languages: {
      type: [String],
      default: [],
    },

    // ===========================
    // Experience
    // ===========================

    experience: {
      type: [experienceSchema],
      default: [],
    },

    // ===========================
    // Education
    // ===========================

    education: {
      type: [educationSchema],
      default: [],
    },

    // ===========================
    // Certificates
    // ===========================

    certificates: {
      type: [certificateSchema],
      default: [],
    },

    // ===========================
    // Achievements
    // ===========================

    achievements: {
      type: [String],
      default: [],
    },

    // ===========================
    // Social Links
    // ===========================

    socialLinks: {
      type: socialLinksSchema,
      default: () => ({}),
    },

    // ===========================
    // Visibility Settings
    // ===========================

    showEmail: {
      type: Boolean,
      default: true,
    },

    showPhone: {
      type: Boolean,
      default: true,
    },

    showLocation: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Profile", profileSchema);