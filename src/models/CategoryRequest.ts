import mongoose from "mongoose";

const CategoryRequestSchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: [true, "Category name is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    examples: {
      type: String,
      trim: true,
    },
    requesterEmail: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.CategoryRequest ||
  mongoose.model("CategoryRequest", CategoryRequestSchema);
