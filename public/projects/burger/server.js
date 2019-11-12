var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
app.use(routes);


//listen for the port 
app.listen(PORT, function(){
	console.log("Server listening on: http://localhost:" + PORT);
});





















// var methodOverride = require('method-override');
// // Import the model (burger.js) to use its database functions.
// var burger = require("./models/burger.js");
// app.use(methodOverride('X-HTTP-Method-Override'));
// app.get("/", function(req, res) {
// 	burger.selectAll(function(data) {
// 		var hbsObject = {
// 			burgers: data
// 		};
// 		console.log(hbsObject);
// 		res.render("index", hbsObject);
// 	});
// });
// app.use("/api/burgers", burgersController);




// *********************************************************************************
// // Server.js - This file is the initial starting point for the Node/Express server.
// // *********************************************************************************

// // Dependencies
// // =============================================================
// var express = require("express");
// var bodyParser = require("body-parser");
// var exphbs = require("express-handlebars");
// var methodOverride = require("method-override");

// // Sets up the Express App
// // =============================================================
// var app = express();
// var PORT = process.env.PORT || 8080;

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Static directory
// app.use(express.static("app/public"));
// app.use(methodOverride("X-HTTP-Method-Override"));

// //body-parser
// app.use(bodyParser.urlencoded({extended: false}));

// //handlebars
// app.engine("handlebars", exphbs({defaultLayout: "main"}));
// app.set("view engine","handlebars");

// app.get("/", function(req,res){
//     burger.selectAll(function(data){
// var hbsObject = {
//     burgers:data
// };
// console.log(hbsObject);
// res.render("index", hbsObject);
//     });
// });
// app.use("/api/burgers", burgersController);

// // Routes
// // =============================================================
// //require("./app/routes/api-routes.js")(app);
// //require("./app/routes/html-routes.js")(app);
// var burgersController = require("./app/controllers/burgers_controller.js");

// var burger = require("./app/models/burger.js");
// // Starts the server to begin listening
// // =============================================================
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });