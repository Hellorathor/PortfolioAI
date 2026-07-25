import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema(
  {
    ip: {
      type: String,
      required: true,
    },
    viewedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false }
);

const analyticsSchema = new mongoose.Schema(
  {
    portfolio: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Portfolio",
      required: true,
      unique: true,
    },

    totalViews: {
      type: Number,
      default: 0,
    },

    uniqueVisitors: {
      type: Number,
      default: 0,
    },

    lastViewed: {
      type: Date,
      default: null,
    },

    visitors: [visitorSchema],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Analytics", analyticsSchema);