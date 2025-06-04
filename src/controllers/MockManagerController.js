const MockUtils = require("../utils/Mock");
const UserManager = require("../managers/UserManager");
const TaskManager = require("../managers/TaskManager");
require("dotenv").config();

class MockManagerController {

    // Public Methods

    static async mockUsers(request, response) {
        try {
            const quantity = process.env.MOCK_USERS_QUANTITY;

            const users = await MockUtils.mockUsers(quantity);

            return response.status(200).json({Status: "Success", Payload: users });
        }
        catch(error) {
            return response.status(500).json({Status:"Error", Message: `${error}`});
        }
    }

    static async mockTasks(request, response) {
        try {
            const quantity = process.env.MOCK_TASKS_QUANTITY;

            const tasks = await MockUtils.mockTasks(quantity);

            return response.status(200).json({Status: "Success", Payload: tasks });
        }
        catch(error) {
            response.locals.message = error;
            return response.status(500).json({Status:"Error", Message: `${error}`});
        }
    }

    static async generateData(request, response) {
        try {
            const userQuantity = process.env.MOCK_USERS_QUANTITY;
            const taskQuantity = process.env.MOCK_TASKS_QUANTITY;

            const users = await MockUtils.mockUsers(userQuantity);
            const tasks = await MockUtils.mockTasks(taskQuantity);

            for(let user of users) {
                await UserManager.createUser(user);
            }

            for(let task of tasks) {
                const bid = task.board;
                await TaskManager.createTask(bid);
            }

            return response.status(201).json({Status: "Success", Message: "Data generated successfully"});
        }
        catch(error) {
            response.locals.message = error;
            return response.status(500).json({Status:"Error", Message: `${error}`});
        }
    }
}

module.exports = MockManagerController;