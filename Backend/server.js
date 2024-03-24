const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// configurations
const app = express();
app.use(cors());
dotenv.config();
app.use(bodyParser.json());

app.get("/hello", (req, res) => {
  console.log("hello from route");
  return res.status(200).json({
    msg: "bro",
  });
});

//bringing routes
const queryRoute = require("./routes/query");
const templateRoute = require("./routes/template");

//route middlewares
app.use("/query", queryRoute);
app.use("/template", templateRoute);

mongoose
  .connect("mongodb://127.0.0.1:27017/designPage")
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log(`App is listening at Port: ${process.env.PORT}`);
});
