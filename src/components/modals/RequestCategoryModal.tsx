"use client";

import React, { useState } from "react";
import posthog from "posthog-js";
import { requestCategory } from "@/actions/submissions";

interface RequestCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RequestCategoryModal({
  isOpen,
  onClose,
}: RequestCategoryModalProps) {
  const [formData, setFormData] = useState({
    categoryName: "",
    description: "",
    examples: "",
    requesterEmail: "",
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

    posthog.capture("category_request_attempted", { category_name: formData.categoryName });
    const result = await requestCategory(formData, posthog.get_distinct_id());

    if (!result.success) {
      posthog.captureException(new Error(result.message), { form: "request_category" });
    }

    if (result.success) {
      setMessage({ type: "success", text: result.message });
      setFormData({
        categoryName: "",
        description: "",
        examples: "",
        requesterEmail: "",
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1e1b4b]/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-card rounded-[4px] border-2 border-ink shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b hairline p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-marigold flex items-center justify-center">
              <svg
                className="w-6 h-6 text-[#1e1b4b]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
            <div>
              <h2 className="font-display text-3xl font-normal text-ink">
                Request a new category
              </h2>
              <p className="text-sm text-muted-foreground">
                Suggest a new category for the library collection
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-ink transition-colors"
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
              className={`p-4 rounded-sm ${
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
              htmlFor="categoryName"
              className="block text-sm font-semibold text-xs uppercase tracking-wider text-ink mb-2"
            >
              Category Name *
            </label>
            <input
              type="text"
              id="categoryName"
              name="categoryName"
              required
              value={formData.categoryName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-sm border border-[var(--input)] bg-paper text-ink focus:outline-none focus:ring-2 focus:ring-marigold focus:border-transparent transition-all"
              placeholder="e.g., Mobile-First UI Libraries"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-xs uppercase tracking-wider text-ink mb-2"
            >
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-sm border border-[var(--input)] bg-paper text-ink focus:outline-none focus:ring-2 focus:ring-marigold focus:border-transparent transition-all resize-none"
              placeholder="Describe what types of libraries would fit in this category..."
            />
          </div>

          <div>
            <label
              htmlFor="examples"
              className="block text-sm font-semibold text-xs uppercase tracking-wider text-ink mb-2"
            >
              Example Libraries (Optional)
            </label>
            <textarea
              id="examples"
              name="examples"
              value={formData.examples}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 rounded-sm border border-[var(--input)] bg-paper text-ink focus:outline-none focus:ring-2 focus:ring-marigold focus:border-transparent transition-all resize-none"
              placeholder="List some example libraries that would fit this category..."
            />
          </div>

          <div>
            <label
              htmlFor="requesterEmail"
              className="block text-sm font-semibold text-xs uppercase tracking-wider text-ink mb-2"
            >
              Your Email *
            </label>
            <input
              type="email"
              id="requesterEmail"
              name="requesterEmail"
              required
              value={formData.requesterEmail}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-sm border border-[var(--input)] bg-paper text-ink focus:outline-none focus:ring-2 focus:ring-marigold focus:border-transparent transition-all"
              placeholder="your@email.com"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 rounded-sm border-2 border-ink text-ink font-semibold text-xs uppercase tracking-wider hover:bg-paper transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-6 py-3 rounded-sm bg-ink text-paper font-semibold text-xs uppercase tracking-wider hover:bg-marigold hover:text-[#1e1b4b] disabled:opacity-50 disabled:cursor-not-allowed transition-all "
            >
              {loading ? "Submitting..." : "Submit Request"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
