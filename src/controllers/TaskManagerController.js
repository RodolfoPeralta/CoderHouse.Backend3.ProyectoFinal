const TaskManager = require("../managers/TaskManager");

class TaskManagerController {

    // Public Methods

     static async getAllTasks(request, response) {
        try {
            const tasks = await TaskManager.getAllTasks();

            if(tasks) {
                return response.status(200).json({Status: "Success", Payload: tasks});
            }
        }
        catch(error) {
            response.locals.message = error;
            return response.status(500).json({Status: "Error", Message: `${error}`});
        }
    }

     static async getTaskById(request, response) {
        try {
            const tid = request.params.tid;

            if(!tid) {
                response.locals.message = "Task id is required";
                return response.status(400).json({Status: "Error", Message: "Task id is required"});
            }

            const task = await TaskManager.getTaskById(tid);

            if(!task) {
                response.locals.message = `Task with id '${tid}' not found`;
                return response.status(404).json({Status: "Error", Message: `Task with id '${tid}' not found`});
            }

            return response.status(200).json({Status: "Success", Payload: task });
        }
        catch(error) {
            response.locals.message = error;
            return response.status(500).json({Status: "Error", Message: `${error}`});
        }
    }

    static async updateTaskById(request, response) {
        try {
            const tid = request.params.tid;
            const { title, description, status } = request.body;

            if(!tid) {
                response.locals.message = "Task id is required";
                return response.status(400).json({Status: "Error", Message: "Task id is required"});
            }

            if(!title) {
                response.locals.message = "Task title is required";
                return response.status(400).json({Status: "Error", Message: "Task title is required"});
            }

            if(!description) {
                response.locals.message = "Task description is required";
                return response.status(400).json({Status: "Error", Message: "Task description is required"});
            }

            if(!status) {
                response.locals.message = "Task status is required";
                return response.status(400).json({Status: "Error", Message: "Task status is required"});
            }

            const newTask = {
                title,
                description,
                status
            };

            if(await TaskManager.updateTaskById(tid, newTask)) {
                return response.status(200).json({Status: "Success", Message: `Task with id '${tid}' updated successfully`});
            }
            else {
                response.locals.message = `Task with id '${tid}' not found`;
                return response.status(404).json({Status: "Error", Message: `Task with id '${tid}' not found`});
            }
        }
        catch(error) {
            response.locals.message = error;
            return response.status(500).json({Status: "Error", Message: `${error}`});
        }
    }

    static async deleteTaskById(request, response) {
        try {
            const tid = request.params.tid;

            if(!tid) {
                response.locals.message = "Task id is required";
                return response.status(400).json({Status: "Error", Message: "Task id is required"});
            }

            if(await TaskManager.deleteTaskById(tid)) {
                return response.status(200).json({Status: "Success", Message: "Task deleted successfully"});
            }
            else {
                response.locals.message = `Task with id '${tid}' not found`;
                return response.status(404).json({Status: "Error", Message: `Task with id '${tid}' not found`});
            }
        }
        catch(error) {
            response.locals.message = error;
            return response.status(500).json({Status: "Error", Message: `${error}`});
        }
    }

}

module.exports = TaskManagerController;