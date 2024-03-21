import { QueryInterface } from 'sequelize';
import { Role } from '../src/models/role';

module.exports = {
  up: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      return await queryInterface.bulkInsert(
        Role.tableName,
        [
          {
            id: 1,
            name: 'Super Admin',
            status: 'active',
            description: 'This is a Super Admin role',
            label: 'Super Admin',
          },
          {
            id: 2,
            name: 'Admin',
            status: 'active',
            description: 'This is a admin role',
            label: 'Admin',
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
