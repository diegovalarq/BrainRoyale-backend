'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'id',
      });
      this.belongsTo(models.Category, {
        foreignKey: 'id',
      });
      this.belongsTo(models.Game, {
        foreignKey: 'id',
      });
    }
  }
  Player.init({
    user_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    game_id: DataTypes.INTEGER,
    position: DataTypes.INTEGER,
    turn: DataTypes.INTEGER,
    brain: DataTypes.INTEGER,
    skip: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Player',
  });
  return Player;
};