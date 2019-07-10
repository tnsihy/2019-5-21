// 已导入菜鸟教程提供的websites.sql
var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'123456',
    database:'test'
});

connection.connect();

var sql = 'SELECT * FROM websites';

connection.query(sql,function(err,result){
    if(err){
        return console.log('[SELECT ERROR] -',err.message);
    }
    console.log('----------------SELECT---------------');
    console.log(result);
    console.log('---------------------------------\n\n');
})