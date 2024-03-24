import { QueryInterface } from 'sequelize';
import { Role } from '../../src/models/role';

module.exports = {
  up: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      return await queryInterface.bulkInsert(
        Role.tableName,
        [
          {
            id: 1,
            roleName: 'Super Admin',
            roleStatus: 'active',
          },
          {
            id: 2,
            roleName: 'Admin',
            roleStatus: 'active',
          },
        ],
        {
          transaction,
        },
      );
    });
  },

  down: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      return await queryInterface.bulkDelete(Role.tableName, {
        transaction,
      });
    });
  },
};
