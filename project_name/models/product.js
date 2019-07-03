module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define("Product", {
    product_id: PRIMARY_KEY,
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },

    product_description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    }
  });
  return Product;
};
