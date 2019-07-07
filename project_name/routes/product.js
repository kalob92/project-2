const express = require('express');
const router = express.Router();
const request = require('request');

// Require controller modules
var productController = require('../controllers/productcontroller');


// home/login page
router.get("/", function(req,res) {
	res.render('login', {
		loggedIn: false
	});
});

// forgot password?
router.get('/forgot', function(req, res) {
	res.render('forgot', {
		loggedIn: false
	});
});

// Get request to get all products
// router.get('/distributor', function(req, res) {
// 	res.render('list', {
// 		loggedIn: true
// 	}),
// 	productController.list
// });

router.get('/distributor', productController.list);
	

router.get("/retailer", function(req,res){
	res.render("retailer");
})


// GET request for insert a new product
router.get('/create', function(req, res) {
	res.render('create', {
		loggedIn: true
	}),
	productController.create
});

// GET request for chat section
router.get('/chat', function(req, res) {
	res.render('chat', {
	pageTitle: 'Chat',
	pageID: 'chat'
	});
});
	
// GET request for about section
// router.get('/about', function(req, res) {
// 	res.render('about', {
// 		loggedIn: true
// 	});
// });

// GET request for edit one product
router.get('/:id/edit', productController.edit);

// POST request for STORE a new product
router.post('/store', productController.store);

// POST request to update a product
router.post('/update', productController.update);

// POST request to delete a product
router.post('/:id/delete', productController.delete);


module.exports = router;