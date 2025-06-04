const User = require("../models/User");
const MongoDbService = require("../services/MongoDbService");

class UserManager {

    // Public Methods

    static async getAllUsers() {
        try {
            return await MongoDbService.getAll(User);
        }
        catch(error) {
            throw error;
        }
    }

    static async getUserById(uid) {
        try {
            return await MongoDbService.getById(User, uid);
        }
        catch(error) {
            throw error;
        }
    }

    static async getUserByEmail(email) {
        try {
            const options = {
                query: {email: email}
            }

            const results = await MongoDbService.aggregate(User, options);

            return results[0] || null;
        }
        catch(error) {
            throw error;
        }
    }

    static async createUser(user) {
        try {
            return await MongoDbService.createOne(User, user);
        }
        catch(error) {
            throw error;
        }
    }

    static async updateUserById(uid, user) {
        try {
            return await MongoDbService.updateById(User, user, uid);
        }
        catch(error) {
            throw error;
        }
    }

    static async deleteUserById(uid) {
        try {
            return await MongoDbService.deleteById(User, uid);
        }
        catch(error) {
            throw error;
        }
    }
}

module.exports = UserManager;