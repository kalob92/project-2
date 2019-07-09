let db = require("../models");
let moment = require("moment");
const express = require('express');

// moment.js
let today = moment().format("dddd, MMMM Do");
let quarter = moment().format("Qo");
let week = moment().format("w");

module.exports = function (app) {

    // Gets the login page
    app.get("/", function (req, res) {
        res.render('login', {
            loggedIn: false
        });
    });

// Gets the retailer page
    app.get("/retailer", function (req, res) {
        res.render("retailer", {
            loggedIn: true,
            retailUserName: "Local Liquor Hut",
            today: today,
            quarter: quarter,
            week: week
        });
    });

    app.get("/distributors", function (req, res) {
        db.Products.findAll({}).then(function(products) {
            res.render("list" , {
                loggedIn: true,
                products
            })
        
            }); 
        });
  

    // app.post('/update', function (req, res){
    //         res.render('list', {
    //             loggedIn:true
    //         });
    //     })
        app.get("/edit", function (req, res){
            res.render("create", {
                loggedIn:true
            });
        })



// Gets the order form page for the retailer
    app.get("/order", function (req, res) {
        res.render("order-form", {
            loggedIn: true
        });
    })

    app.get("/create", function (req,res){
        res.render("create" , {
            loggedIn: true
        })
    })

    app.edit = function(req, res){
        db.Product.findById(req.params.id)
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
    
    // app.update = function(req, res){
    //     console.log(req.body.active);
    //     db.Product.update({
    //         name: req.body.name,
    //         department: req.body.department,
    //         price: req.body.price ? parseFloat(req.body.price) : 0.00,
    //         stock: req.body.stock ? parseInt(req.body.stock) : 0,
    //         active: (req.body.active == 'on') ? true : false
    //     }, {where: {
    //         id: req.body.id
    //     }})
    //     .then(function(){
    //         res.redirect('/distributors');
    //     });
        
    // }
    

};



