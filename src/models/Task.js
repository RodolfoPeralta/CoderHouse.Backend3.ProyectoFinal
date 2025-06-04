const mongoose = require("mongoose");

const TaskCollection = "Task";

const tasksSchema = new mongoose.Schema({
    name: {type: String, default: "Task name", required: true},
    description: {type: String, default: "Task description", required: true },
    status: {type: String, default: "Task Won't Do", required: true },
    board: { type: mongoose.Schema.Types.ObjectId, ref: "Board", required: true }
});

const Task = mongoose.model(TaskCollection, tasksSchema);

module.exports = Task;