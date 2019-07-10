var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'123456',
    database:'test'
});

connection.connect();

var modSql = 'UPDATE websites SET name=?,url=? WHERE id=?'
var modSqlParams = ['菜鸟移动站','https://m.runoob.com',6];

connection.query(modSql,modSqlParams,function(err,result){
    if(err){
        return console.log(['UPDATE ERROR -'] + err.message);
    }
    console.log('----------------UPDATE---------------');
    console.log('UPDATE ID:',result); //中间有个空格
    console.log('---------------------------------\n\n');
})