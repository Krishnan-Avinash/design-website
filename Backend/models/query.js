const mongoose = require("mongoose");
const querySchema = mongoose.Schema({
  mailAddress: {
    type: String,
    required: true,
  },
  queryToAsk: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Query", querySchema);
