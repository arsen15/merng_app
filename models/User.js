const { model, Schema } = require("mongoose");

//This is what gets created for the User table in database
const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String,
});

module.exports = model("User", userSchema);
