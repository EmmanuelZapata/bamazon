var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");
const chalk = require('chalk');

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
    console.log((chalk.bgGreen)(list.toString() + "\n" + "\n"));
  });
  setTimeout(stuffWant, 100);
});

}
function printList(){
  console.log((chalk.bgGreen)(list.toString() + "\n" + "\n"));
}
//Do you want to continue to spending that hard earned money?

function wantMore(){
  inquirer.prompt([
    {
      type: "confirm",
      name: "wantitall",
      message: "\x1b[1m" + "\x1b[33m" + "Do you want to continue buying stuff or not?"
    }
  ]).then(function (confirm){
    if (confirm.wantitall) {
      setTimeout(printList, 1000);
      setTimeout(stuffWant, 1001);
    }
    else {
      console.log('\n' + '\x1b[32m', 'Thanks for spending that moola goodbye!' + '\n'); 
      process.exit();
    }
  })

}
//the let me get my stuff you bastard

function stuffWant(){
inquirer.prompt([
{
type: "input",
name: "id",
message: "Please enter the Item ID of what you want to buy?"
},
{
type: "input",
name: "howmany",
message: "How much more crap would you like to buy?"
}
]).then(function (input) {

  var item = input.id;
  var howmany = input.howmany;


//finds item based on id of item from DB.  Connects as well and looks for errors to throw.
var findStuff = "SELECT * FROM products WHERE ?";
connection.query(findStuff, { id: item }, function (err, res) {
if (err) throw err;

//if the returned has no length means no item was found
if (res.length === 0) {
console.log("\nYou choose poorly choose again!\n");
// run the function again for choice
stuffWant();
}

else if (howmany <= res[0].stock_quantity) {
var selectedProduct = res[0];
connection.query(
"UPDATE products SET ? Where ?",
[{stock_quantity: res[0].stock_quantity - howmany},{id: item}],

function (err, res) {
if (err) throw err;
console.log("\n"+"You bought more stuff and now are broke after spending $"+ selectedProduct.price * howmany +" you fool!" +"\n");
wantMore();
// setTimeout(printList, 3000);
// setTimeout(stuffWant, 3001);
})
}
else {
console.log("\n" + "Sorry, we are sold out. Buy something else!" + "\n");
console.log(list.toString() + "\n" + "\n");
setTimeout(printList, 3000);
setTimeout(stuffWant, 3001);
}
});
});
}