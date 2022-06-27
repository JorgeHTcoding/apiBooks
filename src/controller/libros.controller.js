const { response } = require("express");
const connection = require("../database");


function postLibros(request, response) {
    console.log("Entramos a la funcion postUsuario")
    let sql = "INSERT INTO libro(id_usuario,titulo,tipo,autor,precio,foto)" + "VALUES ('" + request.body.id_usuario + "','" + request.body.titulo + "','" + request.body.tipo + "','" + request.body.autor + "','" + request.body.precio + "','" + request.body.foto + "')";
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

function getLibros(request, response) {
    let sql;
    console.log(request.query.id_libro + " get controller back")
    if (request.query.id_usuario  && request.query.id_libro) {
       sql = "SELECT * FROM libro WHERE id_libro =" + request.query.id_libro + " AND id_usuario=" + request.query.id_usuario
        connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            if (result.insertId)
                response.send(String(result.insertId))
            else
                response.send(result)
        }
    })
    
    } else  {
        console.log(request.query.id_usuario + " get controller back")
        sql = "SELECT * FROM libro WHERE id_usuario ="  + request.query.id_usuario
        connection.query(sql, function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
                if (result.insertId)
                    response.send(String(result.insertId))
                else
                    response.send(result)
            }
        })
    }
}

function putLibros(request, response) {
    {
        
        console.log(request.body.id_usuario + "el id de usuario en el back")
        if(request.query.id != ""){
        let id_usuario = request.body.id_usuario;     
        let titulo   = request.body.titulo;
        let tipo     = request.body.tipo;
        let autor    = request.body.autor;
        let precio   = request.body.precio;
        let foto     = request.body.foto;

        let params   = [id_usuario, titulo, tipo, autor, precio, foto];
    
        let sql = "UPDATE libro SET id_usuario = COALESCE(?, id_usuario) , " + 
                   "titulo = COALESCE(?, titulo), " + "tipo = COALESCE(?, tipo), " + "autor = COALESCE(?, autor), " +
                   "precio = COALESCE(?, precio), " + "foto = COALESCE(?, foto) WHERE id_libro=" + request.body.id_usuario;

        console.log(sql); 
        connection.query(sql, params,function (err, result) 
        {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
                if (result.insertId)
                    response.send(String(result.insertId))
                else
                    response.send(result)
            }
        }); 
    }else{
        console.log("Introduce un id válido")
    }
}
}

function deleteLibros(request, response) {
    let respuesta;
    let sql;
console.log(request.query.id_libro + "ESTA ES LA ID")    
    sql = "DELETE FROM libro WHERE id_libro=" +  request.query.id_libro    
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

module.exports = { postLibros,getLibros,putLibros, deleteLibros }