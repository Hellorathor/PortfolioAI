import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    avatar: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    // Reset Password Fields
    resetPasswordToken: {
    type: String,
    default: null, 
   },
    resetPasswordExpire: {
    type: Date,
    default: null,
  },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;