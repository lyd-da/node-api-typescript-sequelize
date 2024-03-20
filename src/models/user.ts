import {DataTypes, Model } from 'sequelize'
import { sequelize } from '../config';
import { UserType } from '../typings/user';
import { Role } from './role';


export const User = sequelize.define<UserType>(
  'User',{
 id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
  username:{
    type: DataTypes.STRING,
    allowNull: false
  }, 
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
   
  },
  RoleId: {
    type: DataTypes.INTEGER,
    references: {
      model: Role,
      key: 'id',

          }
  },
}, {
  modelName: 'User'
});

User.hasMany(Role);
Role.belongsTo(User);

