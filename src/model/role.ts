import { DataTypes } from 'sequelize';
import { RoleType } from '../typings/role';
import { sequelize } from '../config';

// import { RoleStatusEnum } from '../enum/status';

export const Role = sequelize.define<RoleType>(
  'Role',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    roleName: {
      type: DataTypes.STRING(63),
      unique: true,
      allowNull: false,
    },
    roleStatus: {
      type: DataTypes.STRING(63),
      allowNull: false,
    },

  },
  {
    tableName: 'roles',
    timestamps: false,
  },
);

