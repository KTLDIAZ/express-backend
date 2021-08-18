const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/vanguard", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("db is connected"))
  .catch((error) => console.error(error));
