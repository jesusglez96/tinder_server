const mongoose = require("mongoose");

const MatchSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  ratio: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("Match", MatchSchema);
