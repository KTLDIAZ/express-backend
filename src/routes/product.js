const router = require("express").Router();

const Product = require("../models/Product");

router.post("/product", async (req, res) => {
  const { category, add, quantity, sph } = req.body;

  const newProduct = new Product({
    category,
    add,
    quantity,
    sph,
  });
  await newProduct.save();
  res.send("ok");
});

router.get("/product", async (req, res) => {
  const products = await Product.find();

  res.json(products);
});

/* router.get("/product/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);

  res.json(product);
});
 */
router.get("/product/:category", async (req, res) => {
  const products = await Product.find({ category: req.params.category });

  res.json(products);
});

router.put("/product/:id", async (req, res) => {
  const { category, add, quantity, sph } = req.body;
  const { id } = req.params;
  await Product.findByIdAndUpdate(id, { category, add, quantity, sph });

  res.send("ok");
});

module.exports = router;
