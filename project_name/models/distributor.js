module.exports = function(sequelize, DataTypes) {
    var Distributor = sequelize.define("Distributor", {
      distributor_id: PRIMARY_KEY,
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      product_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
  
      product_description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 255]
        }
      },

      quantity_available: {
          type: DataTypes.INTEGER,
          allowNull: false
      },

      unit_price: {
        type: DataTypes.INTEGER,
        validate: {
            isDecimal: true
        }
      }
    });
    return Distributor;
  };