import mongoose from "mongoose";

const AdminUserSchema = new mongoose.Schema(
  {
    clerkUserId: {
      type: String,
      required: [true, "Clerk user id is required"],
      unique: true,
      index: true,
    },
    email: {
      type: String,
      required: false,
      trim: true,
      lowercase: true,
    },
    role: {
      type: String,
      enum: ["admin", "moderator"],
      default: "admin",
    },
    name: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.AdminUser ||
  mongoose.model("AdminUser", AdminUserSchema);
