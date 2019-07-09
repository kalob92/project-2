var db = require("../models");

module.exports = function(app) {
 
  app.get("/api/products", function(req,res){
    db.Products.findAll({}).then(function(products){
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
    db.Products.create(newProduct).then(function(product){
      console.log(`Added product ${product.name}`);
      res.json({id: product.id})
    })
  })

  app.delete("/api/products/:id" ,function(req,res){
    db.Products.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(products){
      res.end();
    })
  })
}












