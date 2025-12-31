import mongoose from "mongoose";

const LibrarySubmissionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Library name is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    url: {
      type: String,
      required: [true, "Library URL is required"],
      trim: true,
    },
    githubUrl: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },
    submitterEmail: {
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

export default mongoose.models.LibrarySubmission ||
  mongoose.model("LibrarySubmission", LibrarySubmissionSchema);
