'use strict';

import { Role } from '../../src/models/role';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: any, Sequelize: any) {
    await queryInterface.createTable(Role.tableName, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      roleName: {
        type: Sequelize.STRING(63),
        unique: true,
        allowNull: false,
      },
      roleStatus: {
        type: Sequelize.STRING(63),
        allowNull: false,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface: any, Sequelize: any) {
    await queryInterface.dropTable(Role.tableName);
  },
};
