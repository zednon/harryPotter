var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Pbgv1986",
  database: "form_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});   
 connection.query("select * from burgers" , function(error, result){
    // res.render("index" , {data: result})
    console.log(result)
})

// Export connection for our ORM to use.
module.exports = connection;