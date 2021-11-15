'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Itemdacompra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Itemdacompra.belongsTo(models.Compra);
      Itemdacompra.belongsTo(models.Produto);
    }
  };
  
  Itemdacompra.init({
    quantidade: DataTypes.INTEGER,
    valor: DataTypes.FLOAT
    
  }, {
    sequelize,
    modelName: 'Itemdacompra',
  });
  return Itemdacompra;
};