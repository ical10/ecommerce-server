'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      Product.hasMany(models.Cart)
    }
  };
  Product.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Name required'
        },
        isLetterNumber (value) {
          if (!isNaN(Number(value))) {
            throw new Error('Name must contain only alphanumeric characters')
          }
        }
      }
    },
    image_url: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Image_url required'
        },
        isUrl: {
          args: true,
          msg: 'Image_url must contain a url'
        }
      }
    },
    category: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Price required'
        },
        isNaturalNumber (value) {
          if (value < 0) {
            throw new Error('Price must be greater than zero')
          }
        },
        isNumber (value) {
          if (isNaN(Number(value))) {
            throw new Error('Price must be a valid number')
          }
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Stock required'
        },
        isNumber (value) {
          if (isNaN(Number(value))) {
            throw new Error('Stock must be a valid number')
          }
        },
        isNaturalNumber (value) {
          if (value < 0) {
            throw new Error('Stock must be greater than zero')
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
