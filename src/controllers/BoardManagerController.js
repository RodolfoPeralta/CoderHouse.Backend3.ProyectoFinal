const BoardManager = require("../managers/BoardManager");
const TaskManager = require("../managers/TaskManager");
const logger = require("../utils/Logger");

class BoardManagerController {

    static async getAllBoards(request, response) {
        try {
            const boards = await BoardManager.getAllBoards();

            if(boards) {
                return response.status(200).json({Status: "Success", Payload: boards});
            }
        }
        catch(error) {
            response.locals.message = error;
            return response.status(500).json({Status: "Error", Message: `${error}`});
        }
    }

    static async getBoardById(request, response) {
        try {
            const bid = request.params.bid;

            if(!bid) {
                response.locals.message = "Board id is required";
                return response.status(400).json({Status: "Error", Message: "Board id is required"});
            }

            const board = await BoardManager.getBoardById(bid);

            if(!board) {
                response.locals.message = `Board with id '${bid}' not found`;
                return response.status(404).json({Status: "Error", Message: `Board with id '${bid}' not found`});
            }

            return response.status(200).json({Status: "Success", Payload: board });
        }
        catch(error) {
            response.locals.message = error;
            return response.status(500).json({Status: "Error", Message: `${error}`});
        }
    }

    static async createBoard(request, response) {
        try {
            return response.status(201).json(await BoardManager.createBoard());
        }
        catch(error) {
            response.locals.message = error;
            return response.status(500).json({Status: "Error", Message: `${error}`});
        }
    }

    static async updateBoardById(request, response) {
        try {
            const bid = request.params.bid;
            const { title, description } = request.body;

            if(!bid) {
                response.locals.message = "Board id is required";
                return response.status(400).json({Status: "Error", Message: "Board id is required"});
            }

            const board = await BoardManager.getBoardById(bid);

            if(!board) {
                response.locals.message = `Board with id '${bid}' not found`;
                return response.status(404).json({Status: "Error", Message: `Board with id '${bid}' not found`});
            }

            if(!title) {
                return response.status(400).json({Status: "Error", Message: "Board title is required"});
            }

            if(!description) {
                return response.status(400).json({Status: "Error", Message: "Board description is required"});
            }

            const updatedBoard = {
                title,
                description
            };

            if(await BoardManager.updateBoardById(bid, updatedBoard)) {
                return response.status(200).json({Status: "Success", Message: `Board with id '${bid}' updated`});
            }
            else {
                response.locals.message = `Board with id '${bid}' not found`;
                return response.status(404).json({Status: "Error", Message: `Board with id '${bid}' not found`});
            }
        }
        catch(error) {
            response.locals.message = error;
            return response.status(500).json({Status: "Error", Message: `${error}`});
        }
    }

    static async deleteBoardById(request, response) {
        try {
            const bid = request.params.bid;

            if(!bid) {
                return response.status(400).json({Status: "Error", Message: "Board id is required"});
            }

            if(await BoardManager.deleteBoardById(bid)) {
                return response.status(200).json({Status: "Success", Message: `Board with id '${bid}' deleted`});
            }
            else {
                response.locals.message = `Board with id '${bid}' not found`;
                return response.status(404).json({Status: "Error", Message: `Board with id '${bid}' not found`});
            }
        }
        catch(error) {
            response.locals.message = error;
            return response.status(500).json({Status: "Error", Message: `${error}`});
        }
    }

    static async addTaskToBoard(request, response) {
        try {
            const bid = request.params.bid;

            if(!bid) {
                response.locals.message = "Board id is required";
                return response.status(400).json({Status: "Error", Message: "Board id is required"});
            }

            const board = await BoardManager.getBoardById(bid);

            if(!board) {
                response.locals.message = `Board with id '${bid}' not found`;
                return response.status(404).json({Status: "Error", Message: `Board with id '${bid}' not found`});
            }

            const task = await TaskManager.createTask(bid);

            return response.status(201).json({Status: "Success", Payload: task });
        }
        catch(error) {
            response.locals.message = error;
            return response.status(500).json({Status: "Error", Message: `${error}`});
        }
    }
}

module.exports = BoardManagerController;