var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'test'
});

connection.connect();

var addsql = 'INSERT INTO websites(id,name,url,alexa,country) values (0,?,?,?,?)';
var addsqlParams = ['菜鸟工具','https://c.runoob.com','23453','CN']
connection.query(addsql,addsqlParams,function(){})