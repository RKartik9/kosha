"use client";

import React, { useState } from "react";
import { submitLibrary } from "@/actions/submissions";

interface SubmitLibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SubmitLibraryModal({
  isOpen,
  onClose,
}: SubmitLibraryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    url: "",
    githubUrl: "",
    category: "",
    submitterEmail: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const result = await submitLibrary(formData);

    if (result.success) {
      setMessage({ type: "success", text: result.message });
      setFormData({
        name: "",
        description: "",
        url: "",
        githubUrl: "",
        category: "",
        submitterEmail: "",
      });
      setTimeout(() => {
        onClose();
        setMessage(null);
      }, 2000);
    } else {
      setMessage({ type: "error", text: result.message });
    }

    setLoading(false);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#14B8A6] to-[#0D9488] flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Submit a Library
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Share your favorite React library with the community
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {message && (
            <div
              className={`p-4 rounded-lg ${
                message.type === "success"
                  ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800"
                  : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800"
              }`}
            >
              {message.text}
            </div>
          )}

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
            >
              Library Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent transition-all"
              placeholder="e.g., Framer Motion"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
            >
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent transition-all resize-none"
              placeholder="Brief description of the library..."
            />
          </div>

          <div>
            <label
              htmlFor="url"
              className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
            >
              Library URL *
            </label>
            <input
              type="url"
              id="url"
              name="url"
              required
              value={formData.url}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent transition-all"
              placeholder="https://library-website.com"
            />
          </div>

          <div>
            <label
              htmlFor="githubUrl"
              className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
            >
              GitHub URL (Optional)
            </label>
            <input
              type="url"
              id="githubUrl"
              name="githubUrl"
              value={formData.githubUrl}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent transition-all"
              placeholder="https://github.com/username/repo"
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
            >
              Category *
            </label>
            <select
              id="category"
              name="category"
              required
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent transition-all"
            >
              <option value="">Select a category</option>
              <option value="Modern & Tailwind-based">
                Modern & Tailwind-based
              </option>
              <option value="Animation & Motion">Animation & Motion</option>
              <option value="Headless & Unstyled">Headless & Unstyled</option>
              <option value="Complete UI Libraries">
                Complete UI Libraries
              </option>
              <option value="Specialized Libraries">
                Specialized Libraries
              </option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="submitterEmail"
              className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
            >
              Your Email *
            </label>
            <input
              type="email"
              id="submitterEmail"
              name="submitterEmail"
              required
              value={formData.submitterEmail}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent transition-all"
              placeholder="your@email.com"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 rounded-lg border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-[#14B8A6] to-[#0D9488] text-white font-semibold hover:from-[#10A093] hover:to-[#0F766E] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
            >
              {loading ? "Submitting..." : "Submit Library"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
