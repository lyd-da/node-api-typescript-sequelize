import {DataTypes, InferAttributes, Model } from 'sequelize'

export interface UserType extends Model<InferAttributes<UserType>>{
    id: number, 
    username:string,
    firstName: string,
    lastName: string,
    status: string,
    roleId: number
}