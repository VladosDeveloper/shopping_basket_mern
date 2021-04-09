const express = require("express");
const router = express.Router();

//Item model
const Item = require("../../models/Item");

// @rout GET api/items
// @desc get all items
// @access Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((item) => {
      res.json(item);
    });
});

// @rout POST api/items
// @desc Create a item
// @access Public
router.post("/", async (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });

  await newItem.save().then((item) => res.json(item));
});

// @rout DELETE api/items/:id
// @desc DELETE a item
// @access Public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
