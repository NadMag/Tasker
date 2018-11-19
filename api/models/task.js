const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: { type: String, required: true, max: 100 },
  Description: { type: String, required: true },
  Priority: {
    type: String,
    required: true,
    enum: ["Critical", "Medium", "Low"]
  },
  State: {
    type: String,
    required: true,
    enum: ["New", "Active", "Resolved", "Closed"]
  },
  Estimate: { type: Number }
});

// Export the model
module.exports = mongoose.model("Task", TaskSchema);
