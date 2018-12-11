//the code below shows where we ceate mysql as a variable so we can easily reuse that phrase. We also require the package mysql 

var mysql = require("mysql");

// the code below is the connection assignment and tells all the info needed for the connection to be possible 

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgers_db"
});

// below is where the actual connection is supposed to take place. If it does not that it will throw an error so that we are aware that a lack of conneciton is due to the server side. 

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//below states that module.exports is equal to connection as this is the connection.js code.  

module.exports = connection;
