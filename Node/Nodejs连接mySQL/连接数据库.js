// 连接数据库

var mysql = require('mysql');
// 连接数据库的配置
var connection = mysql.createConnection({
    // 主机名称，一般指本机
    host:'localhost',
    // 数据库的端口i好，如果不设置，默认为3306
    port:3306,
    // 创建数据库时设置用户名
    user:'root',
    // 创建数据库时设置的密码
    password:'123456',
    // 创建的数据库
    database:'test'
});

// 与数据库建立连接
connection.connect();
// 查询数据库
connection.query('SELECT 1+1 AS solution',function(err,rows,fields){
    if(err) throw err;
    console.log('The solution is:',rows[0].solution);
})
// 关闭连接
connection.end();