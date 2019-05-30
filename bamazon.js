
//Node stuff!
var mysql = require("mysql");
var inquirer = require("inquirer");


//SQL connection
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "",
    database: "bamazon"
  });
  

  // Throw an error if things are not connected
  
  connection.connect(function(err){
    if(err)throw err;
    console.log("connected as id" + connection.threadId);
  });