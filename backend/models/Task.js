import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  tag: String,
  completed: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model("Task", taskSchema);
