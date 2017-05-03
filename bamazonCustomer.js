var mysql = require("mysql");
var prompt = require("prompt");

// Connection to MySQL database
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'r0flman29',
  database: 'Bamazon'
});


// Main Bamazon function

var runBamazon = function(){
	//Getting information of all products
	connection.query("SELECT * FROM products", function(err, res) {
		return (listProducts(res));
	  
	  });

	setTimeout(function() {
	    prompt.get(['item_id', 'stock_quantity'], function (err, res) {
		    var chosenItem = res.item_id;
		    var chosenQuantity =res.stock_quantity;

		    quantityCheck(chosenItem, chosenQuantity);
		    setTimeout(function() {runBamazon();}, 3500);

		});
	}, 750);
}

//Function to check if the quantity requested to buy is available
var quantityCheck = function (id, quantity){
	connection.query('SELECT * FROM products WHERE item_id = ' + id, function (err, res){
		if (err) throw err;

		var total = res[0].price * quantity;

		var inventory = res[0].stock_quantity - quantity;

		if (inventory < 0){
			console.log('Insufficient quantity. There are only '+ res[0].stock_quantity + ' of this product left.');
		} else {
			console.log('You has bought ' + quantity + ' ' + res[0].product_name + ' for $' + total);
			console.log('There are ' + inventory + ' ' + res[0].product_name + ' left.')
			updateDb(id, inventory)
		}
	});
}
 
//Updating Bamazon databse after items have been bought
var updateDb = function(id, quantity){
	connection.query('UPDATE products SET stock_quantity = ' + quantity + ' WHERE item_id = ' + id, function(err, res) {
        if (err) throw err;
    });
}


//function to list out all products with id, name, department, and price
function listProducts(items){
	for (var i = 0; i < items.length; i++) {
		console.log('------------------------');
		console.log('item_id: ' + items[i].item_id);
		console.log('Item: ' + items[i].product_name);
		console.log('Department: ' + items[i].department_name);
		console.log('Price: $' + items[i].price);
	}
	console.log('------------------------');
}


// Connecting to the Bamazon Database
connection.connect(function(err) {
    if (err) {
		console.error('error connecting: ' + err);
	    return;
	}
});

//Running Bamazon function
runBamazon();