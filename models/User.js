const mongoose = require("mongoose");

const MatchSchema = mongoose.Schema({
  id: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
});

const UserSchema = mongoose.Schema({
  id: {
    type: Number,
    require: true,
    unique: true,
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    default: "",
  },
  matches: [MatchSchema],
});

module.exports = mongoose.model("User", UserSchema);
