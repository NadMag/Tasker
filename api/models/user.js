const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var UserSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  taskIds: { type: [ObjectId] }
});

// Export the model
module.exports = mongoose.model("User", UserSchema);
