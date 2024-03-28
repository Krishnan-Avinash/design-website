const mongoose = require("mongoose");
const templateSchema = mongoose.Schema({
  templateOwner: {
    type: String,
    required: true,
  },
  templateOwnerEmailAddress: {
    type: String,
    required: true,
  },
  templateOwnerPhoneNumber: {
    type: Number,
    required: true,
  },
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
