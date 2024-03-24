import dotenv from 'dotenv';
import { Dialect, Options } from 'sequelize/types/sequelize';
dotenv.config();

interface ConfigTs {
  development: Options & { use_env_variable: any };
  test: Options;
  production: Options;
}

const config: ConfigTs = {
  development: {
    use_env_variable: 'DATABASE_DEV_URL',
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOST,
    dialect: 'mysql' as Dialect,
    define: {
      timestamps: false,
      paranoid: false,
    },
    dialectOptions: {
      charset: 'utf8',
    },
  },
  test: {
    username: 'root',
    password: '',
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: '',
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
module.exports = config;
// console.log(config.development);
