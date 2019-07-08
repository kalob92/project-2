var db = require("../models");

// // eslint-disable-next-line prettier/prettier
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




}







