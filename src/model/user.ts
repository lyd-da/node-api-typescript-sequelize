import {DataTypes, Model } from 'sequelize'
import { sequelize } from '../config';
import { UserType } from '../typings/user';


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
  // bar_id: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: Bar,
  //     key: 'id',

  //         }
  // },
}, {
  modelName: 'User'
});

