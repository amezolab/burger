var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
});


connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;


if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(proess.env.JAWSDB_URL);
} else {

    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root'
        password: 'sE1-]66Y.#Np-:S4)i'
        database: 'burgers_db'



    })

}