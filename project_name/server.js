
const express = require("express");
const app = express();
const product = require('./routes/product');
const path = require('path');
const PORT = process.env.PORT || 3000;


// Requiring our models for syncing
const db = require("./models");

// Sets up the Express app to handle data parsing
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));


// Handlebars
const exphbs = require("express-handlebars");

// Helper to format the price with 2 decimals
const hbs = exphbs.create({
	helpers: {
		formatPrice: function(price) {
  			price = price.toFixed(2);
  			return price;
  		}
  	},
  	defaultLayout: 'main'
});
app.engine('handlebars', hbs.engine);
app.set("view engine", "handlebars");


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, '/public')));

// Router
app.use('/', product);

// Handle 404
app.use(function(req, res) {
	res.render('404');
});

db.sequelize.sync().then(function(){
	app.listen(PORT, function() {
	  console.log("App listening on PORT " + PORT);
	});
});

module.exports = app;