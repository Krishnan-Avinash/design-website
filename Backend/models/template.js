const mongoose = require("mongoose");
const templateSchema = mongoose.Schema({
  templateLink: {
    type: String,
    required: true,
  },
  templateDescription: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Template", templateSchema);
