const router = require("express").Router();
const User = require("../models/User");

// Create
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: "User creation failed", error: err.message });
  }
});

// List
router.get("/", async (_req, res) => {
  try {
    const users = await User.findAll({ order: [["id", "DESC"]] });
    res.json(users);
  } catch (err) {
    console.error("Failed to list users:", err);
    res.status(500).json({ message: "Failed to list users", error: err.message });
  }
});

// Detail
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    console.error("Failed to fetch user:", err);
    res.status(500).json({ message: "Failed to fetch user", error: err.message });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    await user.update(req.body);
    res.json(user);
  } catch (err) {
    console.error("Failed to update user:", err);
    res.status(500).json({ message: "Failed to update user", error: err.message });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    await user.destroy();
    res.json({ message: "User deleted" });
  } catch (err) {
    console.error("Failed to delete user:", err);
    res.status(500).json({ message: "Failed to delete user", error: err.message });
  }
});

module.exports = router;
