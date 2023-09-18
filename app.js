const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const route1 = require("./Routes/route1");

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log("This message is from rishabhTest Branch");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use("/", route1);

mongoose
  .connect(
    "mongodb+srv://teamproject1516:e9TOIJH7KsGzzkOQ@cluster0.nqkwh.mongodb.net/BikeRental"
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((error) => {
    console.log(error);
  });
