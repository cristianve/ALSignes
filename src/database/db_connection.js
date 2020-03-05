
var mariadb = require('mysql')

//https://mariadb.com/kb/en/library/connector-nodejs-promise-api/


module.exports = mariadb.createPool({ // Open a new connection                                                                                                                                           
    
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'alsignos',
    port: '3306'

});


