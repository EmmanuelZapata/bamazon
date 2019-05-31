var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

//Different name than npm needed
var list;

// create the connection information for the sql database
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
showList();

//shows list and connects to db

 function showList() {
 connection.connect(function (err) {
  if (err) throw err;
  list = new Table({
    head: ["Item ID", "Product Name", "Department Name", "Price", "Quantity"]
  });
  connection.query("SELECT * FROM products", function(err, res){
    if (err) throw err;
    for(var i = 0; i < res.length; i++){
      list.push([res[i].id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
    }
    console.log(list.toString() + "\n" + "\n")
  })
  setTimeout(buyWhat, 100);
 
});
}

