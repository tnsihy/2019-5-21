var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'123456',
    database:'test'
});

connection.connect();

var delSql = 'DELETE FROM websites WHERE id = 6';
connection.query(delSql,function(err,result){
    if(err){
        return console.log(err);
    }
    console.log('----------------DELETE---------------');
    console.log('DELETE affectedRows:',result.affectedRows); //所影响记录行数
    console.log('---------------------------------\n\n');
})