import {DataTypes, Model } from 'sequelize'
import { UserType } from '../typings/user';
import { Role } from './role';
import db from '.';


export const User = db.define<UserType>(
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

