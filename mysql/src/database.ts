import { Sequelize } from "sequelize-typescript"
import { User } from "./models/user"

export const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'test',
    password: 'test',
    database: 'test',
    models: [User],
});
