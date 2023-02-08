const envConfig = require('../../../env.config'); 

let ProductsDao;
let CartsDao;
let UsersDao;

console.log(envConfig.DATA_SOURCE);
switch(envConfig.DATA_SOURCE) {  
  case 'mongo':
    ProductsDao = require('./products/products.mongo.dao');
    CartsDao = require('./carts/carts.mongo.dao'); 
    UsersDao = require('./users/users.mongo.dao');
    break;

  default:    
    throw new Error("Invalid Datasource");
  }
  
  module.exports = { ProductsDao, CartsDao, UsersDao };
