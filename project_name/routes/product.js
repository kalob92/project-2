const express = require('express');
const router = express.Router();
const request = require('request');

// Require controller modules
var productController = require('../controllers/productcontroller');


router.get("/", function(req,res) {
	res.render('login', {
		loggedIn: false
	});
});
// Get request to get all products
router.get('/distributor', productController.list);

// GET request for insert a new product
router.get('/create', productController.create);

// GET request for chat section
router.get('/chat', function(req, res) {
      res.render('chat', {
        pageTitle: 'Chat',
        pageID: 'chat'
      });
	});
	
	// GET request for about section
router.get('/about', function(req, res) {
	res.render('about');
  });

// GET request for edit one product
router.get('/:id/edit', productController.edit);

// POST request for STORE a new product
router.post('/store', productController.store);

// POST request to update a product
router.post('/update', productController.update);

// POST request to delete a product
router.post('/:id/delete', productController.delete);


router.get('/api/:id', function(req, response, next){
	var movie = req.params.id;

	request('https://www.omdbapi.com/?t=' + movie + '&y=&plot=short&apikey=trilogy',{JSON: true},(err, res, body) => {
			if (err) { 
				return console.log(err);
			}
			console.log(body)
			var movieObj = body;
			response.locals.movieObj = movieObj
			next();

	});

}, function(req, res, next){
	 movieTitle = JSON.parse(res.locals.movieObj)
	 res.render('info',{
	 	movieTitle: movieTitle
	 });


});

module.exports = router;