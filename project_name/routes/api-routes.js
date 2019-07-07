var db = require("../models");

// eslint-disable-next-line prettier/prettier

app.delete("/distributors/:id"),
function(req, res) {
    db.Products.destroy({
      where: {
      id: req.params.id
      }
    });
};
