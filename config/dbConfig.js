import { Sequelize, DataTypes } from "sequelize";
import userModel from '../models/users.js'

const sequelize = new Sequelize(process.env.DB_NAME, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: "mysql",
    port: process.env.DB_PORT,
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
    },
});

sequelize
    .authenticate()
    .then(() => console.log("conncted successfully"))
    .catch((err) => console.log(err));

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = userModel(sequelize, DataTypes)

db.sequelize.sync({force: false}).then(()=>console.log('db re-sync done !'))

export default db;