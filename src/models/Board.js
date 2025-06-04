const mongoose = require("mongoose");
const Task = require("./Task");

const BoardCollection = "Board";

const boardsSchema = new mongoose.Schema({
    title: {type: String, default: "My Task Board"},
    description: {type: String, default: "Tasks to keep organised"}
});

// Middleware para eliminar tareas asociadas
boardsSchema.pre("findOneAndDelete", async function (next) {
    const board = await this.model.findOne(this.getQuery());
    if (board) {
        await Task.deleteMany({ board: board._id });
    }
    next();
});

const Board = mongoose.model(BoardCollection, boardsSchema);

module.exports = Board;