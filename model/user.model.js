module.exports=(sequelize, Sequelize)=> {
    const User = sequelize.define("user", {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true, 
            unique:true, 
            primaryKey:true
        },
        name:{
            type:Sequelize.STRING, 
            allowNull:false,
        },
        email:{
            type:Sequelize.STRING,
            unique:true,
            allowNull:false,
        },
        password:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        phone:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        role: {
            type:Sequelize.STRING,
            enumerable: ["user", "admin"],
            defaultValue: "user",
            allowNull:true,
        },
    });
    return User;
};


