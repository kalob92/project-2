module.exports = (sequelize, DataTypes) => {
	let Products = sequelize.define("Products", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: {
					msg: "Enter a product."
				}
			}
		},

		department: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: {
					msg: "Enter a product.."
				}
			}
		},
		price: {
			type: DataTypes.FLOAT(11, 2),
			defaultValue: 0.00,
			validate: {
				min: 0
			}
		},

		description: {
			type: DataTypes.STRING,
			allowNull: false
		},
		stock: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			validate: {
				min: 0
			}
		},
		active: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		}
	});

	return Products;
};