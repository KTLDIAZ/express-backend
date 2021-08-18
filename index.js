const express = require("express");
const morgan = require("morgan");

const app = express();
require("./database");

app.set("port", process.env.PORT || 3000);

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => res.send("asdas"));

app.use(require("./src/routes/base"));
app.use(require("./src/routes/category"));
app.use(require("./src/routes/product"));

app.listen(app.get("port"), () =>
  console.log(`running on port ${app.get("port")}`)
);
