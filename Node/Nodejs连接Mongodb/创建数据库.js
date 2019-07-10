/**
 * 创建Mongodb数据库：
 *      创建一个MongodbClient对象 配置好URL和端口号
 * 如果数据库不存在，MongoDB 将创建数据库并建立连接
 */

var MongoClient = require('mongodb').MongoClient; 
var url = 'mongodb://localhost:27017/runoob';

MongoClient.connect(url,{useNewUrlParser:true},function(err,db){
    if(err) throw err;
    console.log('数据库已创建');
    db.close();
})
