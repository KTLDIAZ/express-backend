const router = require("express").Router();

const Category = require("../models/Category");

router.post("/cateogry", async (req, res) => {
  const { category } = req.body;

  const newCategory = new Category({
    category,
  });
  await newCategory.save();
  res.send("ok");
});

router.get("/cateogry", async (req, res) => {
  const categories = await Category.find();

  res.json(categories);
});

router.put("/cateogry/:id", async (req, res) => {
  const { category } = req.body;
  const { id } = req.params;
  await Category.findByIdAndUpdate(id, { category });

  res.send("ok");
});

module.exports = router;
