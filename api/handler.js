require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("../canizares-server/config/db");
const userRoutes = require("../canizares-server/routes/userRoutes");
const articleRoutes = require("../canizares-server/routes/articleRoutes");

const app = express();

// Database Connection
connectDB();

app.use(express.json());

// Middleware
const jsonParser = bodyParser.json();
app.use(jsonParser);
app.use(bodyParser.urlencoded({ extended: true }));

// CORS Configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || "*",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.options(/.*/, cors(corsOptions));
app.use(cors(corsOptions));

// Additional CORS headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", corsOptions.origin);
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/articles", articleRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Backend is running" });
});

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server Error", error: err.message });
});

module.exports = app;
