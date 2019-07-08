var db = require("../models");

// // eslint-disable-next-line prettier/prettier
module.exports = function(app) {
 
  app.get("/api/products", function(req,res){
    db.Product.findAll({}).then(function(products){
      res.json(products)
    })
  })

  app.post("/api/products", function(req,res){
    let { name , department, price, description, stock, active} =req.body; //object destructurint

    let newProduct = {
      name, 
      department,
      price,
      description,
      stock,
      active
    }
    db.Product.create(newProduct).then(function(product){
      console.log(`Added product ${product.name}`);
      res.json({id: product.id})
    })
  })














