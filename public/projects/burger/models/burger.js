// import `orm.js` into `burger.js`


// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

// * Export at the end of the `burger.js` file.


// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm");

// Create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
	selectAll: function(callback) {
		orm.selectAll("burgers", function(result) {
			callback(result);
		});
	},
	// The variables cols and vals are arrays.
	insertOne: function(cols, vals, callback) {
		orm.insertOne("burgers", cols, vals, function(result) {
			callback(result);
		});
	},
	updateOne: function(objColVals, condition, callback) {
		orm.updateOne("burgers", objColVals, condition, function(result) {
			callback(result);
		});
	},
	deleteOne: function( condition, callback) {
		orm.updateOne("burgers", condition, function(result) {
			callback(result);
		});
	}
};



// Export the database functions for the controller (burgerController.js).
module.exports = burger;