'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id'}, 
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Categories', key: 'id'}, 
      },
      game_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Games', key: 'id'}, 
      },
      position: {
        type: Sequelize.INTEGER
      },
      turn: {
        type: Sequelize.INTEGER
      },
      brain: {
        type: Sequelize.INTEGER
      },
      skip: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Players');
  }
};