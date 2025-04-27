import Task from "../models/Task.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const newTask = new Task(req.body);
  await newTask.save();
  res.status(201).json(newTask);
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const updated = await Task.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.status(204).end();
};
