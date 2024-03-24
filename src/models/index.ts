import { Options, Sequelize } from 'sequelize';
// import  config  from '../config/config';
const config = require('../config/config')
const env: string = process.env.NODE_ENV?.trim() || 'development';

const configDB: any = config[env as keyof typeof config];

const db: Sequelize = new Sequelize(configDB.database, configDB.username, configDB.password, {
        host: configDB.host,
        dialect: "mysql"
      });
export default db;