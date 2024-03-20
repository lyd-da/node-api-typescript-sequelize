import { Sequelize } from 'sequelize';
import { Options } from 'sequelize/types';
require('dotenv').config();

const configDB = require('../../config/config');

const env: string = process.env.NODE_ENV?.trim() || 'development';

const config: Options = configDB[env as keyof typeof configDB];

const db: Sequelize = new Sequelize(config.database!, config.username!, config.password, config);

export default db;
