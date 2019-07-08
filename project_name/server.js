// Dependencies
// ======================================================
const express = require("express");
const exphbs = require("express-handlebars");

// const product = require('./routes/product');
// const path = require('path');


// Express
// ======================================================
const app = express();
const PORT = process.env.PORT || 3000;


// Requiring models for syncing
// ======================================================
let db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Directory
// =======================================================
app.use(express.static("public"));


// Helper to format the price with 2 decimals
// const hbs = exphbs.create({
// 	helpers: {
// 		formatPrice: function(price) {
//   			price = price.toFixed(2);
//   			return price;
//   		}
//   	},
//   	defaultLayout: 'main'
// });

// Handlebars
// ======================================================
app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Routes
// ======================================================
// require("./routes/api-routes")(app);
require("./routes/html-routes")(app);


db.sequelize.sync().then(function(){
	app.listen(PORT, function() {
	  console.log("App listening on PORT " + PORT);
	});
});

