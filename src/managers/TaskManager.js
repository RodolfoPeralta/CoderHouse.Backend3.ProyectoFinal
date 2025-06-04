const Task = require("../models/Task");
const MongoDbService = require("../services/MongoDbService");

class TaskManager {

    // Public Methods

    static async getAllTasks() {
        try {
            return await MongoDbService.getAll(Task);
        }
        catch(error) {
            throw error;
        }
    }

    static async getTaskById(tid) {
        try {
            return await MongoDbService.getById(Task, tid);
        }
        catch(error) {
            throw error;
        }
    }

    static async createTask(bid) {
        try {
            const task = {
                board: bid
            };

            return await MongoDbService.createOne(Task, task);
        }
        catch(error) {
            throw error;
        }
    }

    static async updateTaskById(tid, task) {
        try {
            return await MongoDbService.updateById(Task, task, tid);
        }
        catch(error) {
            throw error;
        }
    }

    static async deleteTaskById(tid) {
        try {
            return await MongoDbService.deleteById(Task, tid);
        }
        catch(error) {
            throw error;
        }
    }
}

module.exports = TaskManager;