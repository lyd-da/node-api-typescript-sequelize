import { QueryInterface } from 'sequelize';
import { User } from '../../src/models/user';

module.exports = {
  up: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      return await queryInterface.bulkInsert(
        User.tableName,
        [
          {
            id: 1,
            username: 'super',
            firstName: 'Super',
            lastName: 'Admin',
            // status: 'active',
            RoleId: 1,
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
      return await queryInterface.bulkDelete(User.tableName, {
        transaction,
      });
    });
  },
};
