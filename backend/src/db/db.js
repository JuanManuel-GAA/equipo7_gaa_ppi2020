const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
host: 'bwofnrwopvbduegulgf7-mysql.services.clever-cloud.com',
user:'utqsblfiloo0v6j3',
password:'Y6keCSwkUaCJecjfCcyd',
database: 'bwofnrwopvbduegulgf7',
multiStatements: true
});

mysqlConnection.connect(function (err){
  if(err){
    console.log(err);
  }else{
    console.log('La base de datos está conectada')
  }
});

module.exports =  mysqlConnection;