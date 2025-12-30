const router = require("express").Router();
const Horse = require("../models/Horse");

// Create
router.post("/", async (req, res) => {
  try {
    if (!req.body.imageUrl) {
      return res.status(400).json({ message: "Image URL is required" });
    }
    const horse = await Horse.create(req.body);
    res.status(201).json(horse);
  } catch (err) {
    res.status(400).json({ message: "Horse creation failed", error: err.message });
  }
});

// List
router.get("/", async (_req, res) => {
  try {
    const horses = await Horse.findAll({ order: [["id", "DESC"]] });
    res.json(horses);
  } catch (err) {
    console.error("Failed to list horses:", err);
    res.status(500).json({ message: "Failed to list horses", error: err.message });
  }
});

// Detail
router.get("/:id", async (req, res) => {
  try {
    const horse = await Horse.findByPk(req.params.id);
    if (!horse) return res.status(404).json({ message: "Horse not found" });
    res.json(horse);
  } catch (err) {
    console.error("Failed to fetch horse:", err);
    res.status(500).json({ message: "Failed to fetch horse", error: err.message });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const horse = await Horse.findByPk(req.params.id);
    if (!horse) return res.status(404).json({ message: "Horse not found" });
    await horse.update(req.body);
    res.json(horse);
  } catch (err) {
    console.error("Failed to update horse:", err);
    res.status(500).json({ message: "Failed to update horse", error: err.message });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const horse = await Horse.findByPk(req.params.id);
    if (!horse) return res.status(404).json({ message: "Horse not found" });
    await horse.destroy();
    res.json({ message: "Horse deleted" });
  } catch (err) {
    console.error("Failed to delete horse:", err);
    res.status(500).json({ message: "Failed to delete horse", error: err.message });
  }
});

module.exports = router;
