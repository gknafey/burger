
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "s9xpbd61ok2i7drv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com"	 || "localhost",
  port: process.env.PORT || 3306,
  user: "e4okyrznbswifoet" || "root", 
  password: "pdkqunpmqub2rxed" || "pass",
  database: "dkk8ytitycx85ixf" || "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

