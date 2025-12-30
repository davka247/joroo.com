const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const sequelize = require("./db");
require("./models/Horse");
require("./models/User");

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" })); // accept base64 images

// Root message
app.get("/", (_req, res) => res.json({ message: "joroocom API is running" }));
app.get("/health", (_req, res) => res.json({ status: "ok" }));
app.use("/api/horses", require("./routes/horses"));
app.use("/api/users", require("./routes/users"));
app.use("/api/uploads", require("./routes/uploads"));

// Initialize DB once (for serverless this runs on cold start)
async function initDb() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("MySQL connected and synced");
  } catch (err) {
    console.error("Failed to connect/sync DB:", err);
  }
}

initDb();

module.exports = app;
