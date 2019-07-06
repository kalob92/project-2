// Dependencies
const express = require('express');
var db = require('../models');

// Require the list of genres from departments.js
// This list will fill the select element in the view
var departments = require('../config/departments');

// Find all products and render list view
exports.list = function(req, res){
	db.product.findAll().then(function(data){
		res.render("list", { products: data });
	});
}



// Render view to create a new product
exports.create = function(req, res){
	res.render("create", { department: departments});
}

// Save the new product in database and redirect to create
exports.store = function(req, res){
	db.product.create({
		name: req.body.name,
		department: req.body.department,
		price: req.body.price ? parseFloat(req.body.price) : 0.00,
		stock: req.body.stock ? parseInt(req.body.stock) : 0,
		active: (req.body.active == 'on') ? true : false
	})	
	.then(function(){
		res.redirect('/');  // option is to redirect to 'create' so user could enter several titles 
	});
}

// Delete a product from database and return ok
exports.delete = function(req, res){
	db.product.destroy({
		where: 
			{id: req.params.id}
	}).then(function(){
		res.json('ok');
		}
	);
}

// Find a product by id and render the view to edit it
exports.edit = function(req, res){
	db.product.findById(req.params.id)
		.then(function(data){
			if(data){
				for (var i = 0 in departments) {
					if(departments[i].value == data.department){
				  		departments[i].selected = true;
					} else {
						departments[i].selected = false;
					}
				}
				res.render("edit", { product: data, department: departments});
			} else {
				res.render('404');
			} 
	});
}

// Update a product
exports.update = function(req, res){
	console.log(req.body.active);
	db.product.update({
		name: req.body.name,
		department: req.body.department,
		price: req.body.price ? parseFloat(req.body.price) : 0.00,
		stock: req.body.stock ? parseInt(req.body.stock) : 0,
		active: (req.body.active == 'on') ? true : false
	}, {where: {
		id: req.body.id
	}})
	.then(function(){
		res.redirect('/');
	});
	
}