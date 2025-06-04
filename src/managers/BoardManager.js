const MongoDbService = require("../services/MongoDbService");
const Board = require("../models/Board");

class BoardManager {

    // Public Methods

    static async getAllBoards() {
        try {
            return await MongoDbService.getAll(Board);
        }
        catch(error) {
            throw error;
        }
    }

    static async getBoardById(bid) {
        try {
            return await MongoDbService.getById(Board, bid);
        }
        catch(error) {
            throw error;
        }
    }

    static async createBoard() {
        try {
            return await MongoDbService.createOne(Board);
        }
        catch(error) {
            throw error;
        }
    }

    static async updateBoardById(bid, board) {
        try {
            return await MongoDbService.updateById(Board, board, bid);
        }
        catch(error) {
            throw error;
        }
    }

    static async deleteBoardById(bid) {
        try {
            return await MongoDbService.deleteById(Board, bid);
        }
        catch(error) {
            throw error;
        }
    }
}

module.exports = BoardManager;