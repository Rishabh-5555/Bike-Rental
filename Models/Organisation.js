const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const organisationSchema = new Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model("Organisation", organisationSchema);
