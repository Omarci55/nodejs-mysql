 const Sequelize = require("sequelize");
 const connection = require("./database");

 //criando uma tabel no banco de dados
 const Questions = connection.define('question', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

//para recriar uma tabewla caso ela ja exista 
Questions.sync({force: false})

module.exports = Questions;