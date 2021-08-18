const router = require("express").Router();

const Base = require("../models/Base");

router.post("/base", async (req, res) => {
  const { base, add, quantity, side } = req.body;

  const newBase = new Base({
    base,
    add,
    quantity,
    side,
  });

  await newBase.save();
  res.send("ok");
});

router.get("/base", async (req, res) => {
  const bases = await Base.find();

  res.json(bases);
});

router.put("/base/:id", async (req, res) => {
  const { base, add, quantity, side } = req.body;
  const { id } = req.params;
  await Base.findByIdAndUpdate(id, { base, add, quantity, side });

  res.send("ok");
});

module.exports = router;
