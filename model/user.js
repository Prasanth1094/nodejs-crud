const mongoose = require("mongoose");

// const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },  
  usertype: {
    type: String,
    enum: ["ADMIN", "MANAGER", "USER"],
  },
  phonenumber: {
    type: Number,
  },
  address: {
    type: String,
  }
});

const User = mongoose.model('user',UserSchema);

module.exports = { User }
