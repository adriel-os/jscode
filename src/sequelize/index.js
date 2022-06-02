const {env} = require('dotenv').config({  
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
  })

  require('dotenv').config()



  require('dotenv').config({.env'})
const env = require('dotenv').config()

  require('dotenv').config()
  console.log(process.env.APP_NAME) //




const { Sequelize } = require('sequelize');

const db = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
  })

console.log(process.env.DB_NAME)