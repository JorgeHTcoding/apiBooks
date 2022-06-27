const { response } = require("express");
const connection = require("../database");
let answer = {}

function postUsuario(request, response) {
    console.log("Entramos a la funcion postUsuario")
    let sql = "INSERT INTO usuario(nombre,apellidos,correo,url,password)" + "VALUES ('" + request.body.nombre + "','" + request.body.apellidos + "','" + request.body.correo + "','" + request.body.url + "','" + request.body.password + "')";
    console.log(sql)
    console.log("entramos al back")
    connection.query(sql, function (err, result) {

        if (err) {
            console.log(err);
        } else {
            console.log(result);
            if (result.insertId)
                response.send(String(result.insertId))
            else
                response.send(respuesta)
        }
    })
}

function getUsuario(request, response) {
  
    let param = [request.body.correo,request.body.password]
    let sql = "SELECT * FROM usuario WHERE correo =?  AND password =?"
    connection.query(sql,param, function (err, result) {
        if (err)
            console.log(err);
        else {
            if(result.length > 0){
                answer = {error:false, message:"La contraseña y el correo SI coinciden ", result:result}      
               
            }else{
                answer = {error: true, message: "La contraseña y el correo NO coinciden ", result:result}         
            }
            } response.send(answer);
        }
    )}


module.exports = { postUsuario, getUsuario }