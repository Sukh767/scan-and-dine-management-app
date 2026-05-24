import express from "express";
import cors from "cors";
import colors from "colors";
import dotenv from "dotenv";


dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test Route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Scan & Dine API is running successfully 🚀",
  });
});

// Root Route
app.get("/", (req, res) => {
  res.send("Welcome to Scan & Dine API");
});

// PORT
// console.log(process.env.PORT);
const PORT = process.env.PORT || 5000;

// Server
app.listen(PORT, () => {
  console.log(
    `🚀 Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`.bgBlack
      .blue.bold    
  );
});