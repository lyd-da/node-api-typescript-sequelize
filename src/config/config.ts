import dotenv from 'dotenv';

dotenv.config();

export const config =
{
  // development: {
  //   username: process.env.USERNAME,
  //   password: process.env.PASSWORD,
  //   database: process.env.DB_NAME,
  //   host:process.env.HOST,
  //   dialect: process.env.DIALECT
  // },
  "development": {
    "username": "root",
    "password": null,
    "database": "sample_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
},
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
