var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port:'3306',
    user: 'root',
    password: '123456',
    database: 'test'
});

connection.connect();

var addSql = 'INSERT INTO websites(id,name,url,alexa,country) VALUES (0,?,?,?,?)';
var addsqlParams = ['菜鸟工具', 'https://c.runoob.com', '23453', 'CN'];
connection.query(addSql, addsqlParams, function (err, result) {
    if (err) {
        return console.log('INSERT ERROR -' + err.message);
    }
    console.log('----------------INSERT---------------');
    console.log('INSERT ID:',result); //中间有个空格
    console.log('---------------------------------\n\n');
})
// 直接在数据库中查看