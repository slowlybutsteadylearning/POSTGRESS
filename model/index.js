const {Sequelize} = require("sequelize")
process.env.NODE_ENV; //"development"
const sequelize = new Sequelize(process.env.DB_NAME,"postgres", process.env.PASSWORD,{
    host:"localhost",
    dialect:"postgres",
    logging: false,
});

const db ={};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model")(sequelize,Sequelize)

module.exports =db
