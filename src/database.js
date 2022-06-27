const mysql = require("mysql2");

const connection = mysql.createConnection(
{
    host        :"localhost",
    user        :"root",
    password    :"Alai321!",
    database    :"appbooks"
});

connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log("Conexión establecida")
    }
});

module.exports = connection;