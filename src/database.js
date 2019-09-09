const mysql = require('mysql');

const jsonDB = {
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'cupones'
};

const con = mysql.createConnection(jsonDB);

if(con){
    console.log("Conectado");
}

module.exports = con;