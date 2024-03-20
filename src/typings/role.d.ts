import {DataTypes, InferAttributes, Model } from 'sequelize'

export interface RoleType extends Model<InferAttributes<RoleType>>{
    id: number, 
    roleName:string,
    roleStatus: string,
}