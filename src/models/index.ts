import { Options, Sequelize } from 'sequelize';
require('dotenv').config();

const config = require('../../db/config/config');
const env: string = process.env.NODE_ENV?.trim() || 'development';

const configDB: any = config[env as keyof typeof config];

export const db = new Sequelize(configDB.database, configDB.username, configDB.password, configDB);

