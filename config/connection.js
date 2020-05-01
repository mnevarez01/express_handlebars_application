var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.send.JAWSDB_URL):
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "IRene060464!",
        database: "burgers_db"
    })
}



connection.connect();

module.exports = connection;
