const mongoose = require("mongoose");

const userCollection = "User";

const usersSchema = new mongoose.Schema({
    first_name: { type: String, require: true },
    last_name: { type: String, require: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, default: "user" },
    board: { type: mongoose.Schema.Types.ObjectId, ref: "Board", required: true }
});

const User = mongoose.model(userCollection, usersSchema);

module.exports = User;