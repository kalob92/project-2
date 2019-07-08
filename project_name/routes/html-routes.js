let db = require("../models");
let moment = require("moment");

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

    // Gets the distributor page. Not workin
    // *************************************
    app.get("/distributors", function (req, res) {
        db.Products.findAll({}).then(function(products) {
            console.log(products);
            res.render("list" , {
                loggedIn: true,
                products
            })
        
            }); 
        });
  
    // *************************************

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

};



