'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface:any, Sequelize:any) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
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
  async down(queryInterface: any, Sequelize:any) {
    await queryInterface.dropTable('Users');
  }
};