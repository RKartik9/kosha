# MongoDB Integration for Kosha

This document explains the MongoDB setup for handling library submissions and category requests.

## Setup

### 1. Environment Variables

Make sure your `.env` file contains:

```env
MONGODB_URI=mongodb+srv://urskartik9_db_user:sjDL1AwMr0iuD7Ut@cluster0.kj2gtyr.mongodb.net/?appName=Cluster0
```

### 2. Database Structure

#### LibrarySubmission Collection

Stores library submissions from users:

```typescript
{
  name: string; // Library name
  description: string; // Library description
  url: string; // Library website URL
  githubUrl: string; // GitHub repository URL (optional)
  category: string; // Category selection
  submitterEmail: string; // Submitter's email
  status: "pending" | "approved" | "rejected"; // Submission status
  createdAt: Date; // Auto-generated
  updatedAt: Date; // Auto-generated
}
```

#### CategoryRequest Collection

Stores category suggestions from users:

```typescript
{
  categoryName: string; // Suggested category name
  description: string; // Category description
  examples: string; // Example libraries (optional)
  requesterEmail: string; // Requester's email
  status: "pending" | "approved" | "rejected"; // Request status
  createdAt: Date; // Auto-generated
  updatedAt: Date; // Auto-generated
}
```

## Usage

### Submit a Library

Users can submit libraries through the modal on the libraries page:

1. Click "Submit a Library" button
2. Fill in library details:
   - Name
   - Description
   - Library URL
   - GitHub URL (optional)
   - Category
   - Email
3. Data is saved to MongoDB via server action

### Request a Category

Users can suggest new categories:

1. Click "Request Category" button
2. Fill in category details:
   - Category Name
   - Description
   - Example Libraries (optional)
   - Email
3. Data is saved to MongoDB via server action

## Files Structure

```
src/
├── actions/
│   └── submissions.ts          # Server actions for form submissions
├── components/
│   └── modals/
│       ├── SubmitLibraryModal.tsx     # Submit library modal
│       └── RequestCategoryModal.tsx   # Request category modal
├── lib/
│   └── mongodb.ts              # MongoDB connection utility
└── models/
    ├── LibrarySubmission.ts    # Library submission schema
    └── CategoryRequest.ts      # Category request schema
```

## Server Actions

### `submitLibrary(formData)`

Saves a library submission to the database.

**Parameters:**

- `name`: Library name
- `description`: Library description
- `url`: Library URL
- `githubUrl`: GitHub URL (optional)
- `category`: Selected category
- `submitterEmail`: Submitter's email

**Returns:**

```typescript
{
  success: boolean;
  message: string;
  data?: object;
}
```

### `requestCategory(formData)`

Saves a category request to the database.

**Parameters:**

- `categoryName`: Category name
- `description`: Category description
- `examples`: Example libraries (optional)
- `requesterEmail`: Requester's email

**Returns:**

```typescript
{
  success: boolean;
  message: string;
  data?: object;
}
```

## Admin Access

To view submissions in MongoDB:

1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Navigate to your cluster
3. Click "Browse Collections"
4. View:
   - `librarysubmissions` collection
   - `categoryrequests` collection

## Future Enhancements

- [ ] Admin dashboard to review submissions
- [ ] Email notifications for new submissions
- [ ] Auto-approve based on validation
- [ ] Submission history for users
- [ ] Duplicate detection
