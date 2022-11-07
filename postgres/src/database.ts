import { Sequelize } from "sequelize-typescript"
import { User } from "./models/user"

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'test',
    password: 'test',
    database: 'test',
    models: [User],
});
