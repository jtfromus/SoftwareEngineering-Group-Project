function createDatabase(){
	var mySQL = require('mySQL');

	// CREATES CONFIGURATION FOR CONNECTING TO LOCAL HOST
	var connection = mySQL.createConnection({
		host: "localhost",
		user: "",
		password: ""
	});

	// CONNECTS TO LOCAL HOST 
	connection.connect(function(err) {
	if (err) 
		throw err;
	console.log("Connected!");
  
	// CREATES DATABASE
	connection.query("CREATE DATABASE storeDatabase", function (err, result) {
		if (err) 
			throw err;
		console.log("Store Database Created");
	});
  
	// CREATES TABLE WITH PARAMETERS
	// itemNumber, name, weight, expDate, price, stock, discount, description, inStock, imgSrc ./images/chicken.jpg
	var TableCreation = "CREATE TABLE inventory (itemNumber INT PRIMARY KEY, "
			+ "name VARCHAR(100), weight FLOAT, expDate VARCHAR(100), price FLOAT, "
			+ "stock INT, discount FLOAT, description VARCHAR(255), inStock BOOLEAN, "
			+ "imgSrc VARCHAR(100)";
	connection.query(TableCreation, function (err,result) {
		if (err)
			throw err;
		console.log("Created Inventory Table");
	});
  
	// INPUTS ITEMS
	var TableInsert = "INSERT INTO storeDatabase (itemNumber, name, price, stock, intStock, imgSrc) VALUES ?";
	var values = [
		['987654', 'Chicken', '10.99', '25', 'TRUE', './images/chicken.jpg']
		['135792', 'Steak', '7.99', '35', 'TRUE', './images/steak.jpg']
		['246813', 'Fish', '8.50', '40', 'TRUE', './images/fish.jpg']
		['345126', 'Cucumber', '0.99', '50', 'TRUE', './images/cucumber.jpg']
		['345677', 'Tomato', '0.25', '60', 'TRUE', './images/tomato.jpg']
		['216788', 'Lettuce', '0.15', '67', 'TRUE', './images/lettuce.jpg']
		['332444', 'Carrot', '0.10', '56', 'TRUE', './images/carrot.jpg']
		['867549', 'Squash', '0.08', '78', 'TRUE', './images/squash.jpg']
		['408444', 'Apple', '0.11', '103', 'TRUE', './images/apple.jpg']
		['408322', 'Banana', '0.10', '79', 'TRUE', './images/banana.jpg']
		['408221', 'Orange', '0.90', '76', 'TRUE', './images/orange.jpg']
		['900111', 'Kiwi', '0.10', '97', 'TRUE', './images/kiwi.jpg']
	];
	connection.query(TableInsert, [values], function (err, result) {
		if (err)
		throw err;
	console.log("Entry "+ result.insertId +" inserted");
	});	
});
}
