import { Sequelize } from "sequelize-typescript"
import { User } from "./models/user"

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    host: 'localhost',
    username: 'test',
    password: 'test',
    database: 'test',
    models: [User],
});
