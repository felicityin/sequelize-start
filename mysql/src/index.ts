import { sequelize } from "./database"
import { User } from "./models/user"

// sequelize.authenticate() - test if the connection is OK
sequelize.authenticate().then(async() => {
    console.log("database connected");

    try {
        // creates the table, dropping it first if it already existed
        // User.sync({ force: true });

        // automatically synchronize all models
        await sequelize.sync({force: true});

        console.log("Inserting a new user into the database...");
        const user = await User.create({
            firstName: "Timber",
            lastName: "Saw",
            age: 25,
        });
        console.log("Saved a new user with id: " + user.id)

        console.log("Loading user from the database...")
        const userFound = await User.findOne({
            where: { firstName: 'Timber' }
        });
        console.log("Loaded user: ", userFound);
    } catch (error: any) {
        console.log(error.message);
    }
}).catch((e: any) => {
    console.log(e.message);
})
