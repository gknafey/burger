
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "s9xpbd61ok2i7drv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: process.env.PORT || 3306,
  user: "	e4okyrznbswifoet",
  password: "	pdkqunpmqub2rxed",
  database: "dkk8ytitycx85ixf"
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

