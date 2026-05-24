# Scan & Dine

A full-stack MERN-based smart restaurant platform built with a scalable monorepo architecture.

## Overview

Scan & Dine is a QR-based restaurant ordering and management system consisting of:

* Customer-facing web application
* Restaurant admin dashboard
* Backend API server

The project follows an industry-style monorepo architecture to keep all applications organized in a single repository.

---

# Project Architecture

```bash
scan-and-dine/
│
├── apps/
│   ├── api/              # Backend API (Node.js + Express + MongoDB)
│   ├── client/           # Customer React application
│   └── admin/            # Restaurant admin dashboard
│
├── docs/                 # Documentation files
├── shared/               # Shared utilities/constants/components
│
├── .env                  # Root environment variables
├── .gitignore
├── package.json          # Root scripts controller
└── README.md
```

---

# Applications

## 1. API Server (`apps/api`)

The backend server handles:

* Authentication
* Authorization
* Food management
* Order management
* Payment integration
* QR functionality
* Database operations
* Admin APIs

### Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Cloudinary
* Stripe

### Suggested Structure

```bash
apps/api/src/
│
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── services/
├── utils/
├── validators/
└── server.js
```

---

## 2. Client Application (`apps/client`)

Customer-facing application.

### Features

* QR menu scanning
* Browse foods
* Cart management
* Online ordering
* Payment system
* Order tracking

### Tech Stack

* React
* Vite
* Redux Toolkit
* React Router DOM

### Suggested Structure

```bash
apps/client/src/
│
├── assets/
├── components/
├── features/
├── hooks/
├── layouts/
├── pages/
├── routes/
├── services/
├── store/
├── utils/
└── main.jsx
```

---

## 3. Admin Dashboard (`apps/admin`)

Restaurant management dashboard.

### Features

* Manage foods
* Manage categories
* Track orders
* Restaurant analytics
* QR generation
* Table management
* Staff management

### Tech Stack

* React
* Vite
* Redux Toolkit
* Chart libraries

### Suggested Structure

```bash
apps/admin/src/
│
├── assets/
├── components/
├── dashboard/
├── hooks/
├── layouts/
├── pages/
├── routes/
├── services/
├── store/
├── utils/
└── main.jsx
```

---

# Why Separate React Applications?

The customer application and admin dashboard are intentionally separated.

## Benefits

* Better scalability
* Cleaner architecture
* Independent deployments
* Separate authentication flows
* Easier maintenance
* Improved code organization
* Production-ready structure

This is how modern SaaS and enterprise applications are commonly structured.

---

# Installation Guide

## Clone Repository

```bash
git clone git@github.com:YOUR_USERNAME/scan-and-dine.git
cd scan-and-dine
```

---

# Environment Variables

Create a `.env` file in the project root.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
STRIPE_SECRET_KEY=your_stripe_secret
```

---

# Root Package Scripts

The root `package.json` controls all applications.

## Root `package.json`

```json
{
  "name": "scan-and-dine",
  "private": true,
  "scripts": {
    "dev": "concurrently \"npm run dev --prefix apps/api\" \"npm run dev --prefix apps/client\" \"npm run dev --prefix apps/admin\"",

    "install-all": "npm install --prefix apps/api && npm install --prefix apps/client && npm install --prefix apps/admin"
  },
  "devDependencies": {
    "concurrently": "^9.0.1"
  }
}
```

---

# Application Scripts

## API Scripts

File:

```bash
apps/api/package.json
```

```json
{
  "scripts": {
    "dev": "nodemon src/server.js"
  }
}
```

---

## Client Scripts

File:

```bash
apps/client/package.json
```

```json
{
  "scripts": {
    "dev": "vite"
  }
}
```

---

## Admin Scripts

File:

```bash
apps/admin/package.json
```

```json
{
  "scripts": {
    "dev": "vite --port 5174"
  }
}
```

---

# Setup Instructions

## Install All Dependencies

Run from project root:

```bash
npm run install-all
```

This installs dependencies for:

* API server
* Client application
* Admin dashboard

---

# Run Entire Project

Run from project root:

```bash
npm run dev
```

This starts:

| Service         | Port |
| --------------- | ---- |
| API Server      | 5000 |
| Client App      | 5173 |
| Admin Dashboard | 5174 |

---

# Individual App Commands

## Run Backend Only

```bash
npm run dev --prefix apps/api
```

## Run Client Only

```bash
npm run dev --prefix apps/client
```

## Run Admin Only

```bash
npm run dev --prefix apps/admin
```

---

# Git Setup

## Initialize Repository

```bash
git init
```

## Add Remote Repository

```bash
git remote add origin git@github.com:YOUR_USERNAME/scan-and-dine.git
```

## Push Code

```bash
git add .
git commit -m "Initial project setup"
git push -u origin main
```

---

# Recommended .gitignore

```gitignore
node_modules
.env
build
dist
coverage
*.log
```

---

# Recommended Future Improvements

## Add Docker Support

Suggested future files:

```bash
Dockerfile
docker-compose.yml
```

---

## Add CI/CD

Suggested folder:

```bash
.github/workflows/
```

---

## Add Shared Packages

Suggested structure:

```bash
packages/
```

Can contain:

* Shared UI components
* Shared constants
* Shared types
* Shared utility functions

---

# Recommended Deployment

| Application | Platform      |
| ----------- | ------------- |
| Client      | Vercel        |
| Admin       | Vercel        |
| API         | Render / VPS  |
| Database    | MongoDB Atlas |

---

# Recommended Naming Conventions

## Repository

```bash
scan-and-dine
```

## Folder Names

```bash
apps/api
apps/client
apps/admin
```

## React Components

Use PascalCase:

```bash
FoodCard.jsx
Navbar.jsx
DashboardLayout.jsx
```

## Utility Files

Use camelCase:

```bash
formatPrice.js
apiClient.js
```

---

# Development Workflow

1. Clone repository
2. Install dependencies
3. Create `.env`
4. Run development server
5. Start building features

---