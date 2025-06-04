const BcryptUtils = require("./Bcrypt");
const BoardManager = require("../managers/BoardManager");

const faker = require("@faker-js/faker").fakerDE;

class MockUtils {
    
    // Public Methods

    static async mockTasks(quantity) {
        try {
            let tasks = [];

            for(let i=0; i < quantity; i++) {
                const task = {
                    name: faker.word.words(3),
                    description: faker.lorem.sentence(),
                    status: faker.helpers.arrayElement(["Task in progress", "Task completed", "Task won't do"]),
                    board: await BoardManager.createBoard()
                }

                tasks.push(task);
            }

            return tasks;
        }
        catch(error) {
            throw(`Error when trying to mock tasks. Message: ${error}`);
        }
    }

    static async mockUsers(quantity) {
        try {

            let users = [];

            for(let i=0; i < quantity; i++) {
                const user = {
                    first_name: faker.person.firstName(),
                    last_name: faker.person.lastName(),
                    email: faker.internet.email(),
                    password: BcryptUtils.createHash("coder123"),
                    role: faker.helpers.arrayElement(["admin", "user"]),
                    board: await BoardManager.createBoard()
                }

                users.push(user);
            }

            return users;
        }
        catch(error) {
            throw(`Error when trying to mock users. Message: ${error}`);
        }
    }
}

module.exports = MockUtils;