import { DataTypes, Model } from 'sequelize';
import { UserType } from '../typings/user';
import { Role } from './role';
import {db} from '.';
import { userStatus } from '../enum/userStatusEnum';

export const User = db.define<UserType>(
  'User',
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    roleId: {
      type: DataTypes.INTEGER,
      references: {
        model: Role.tableName,
        key: 'id',
      },
    },
    status :{
      type: DataTypes.STRING,
      defaultValue : userStatus.INACTIVE
    }
  },
  {
    tableName: 'users',
  },
);

User.hasMany(Role);
Role.belongsTo(User);
