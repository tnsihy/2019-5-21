/**
 * 以下实例我们连接数据库 runoob 的 site 表，并插入一条数据条数据，使用 insertOne()：
 */
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, {
    useNewUrlParser: true
}, function (err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    var myobj = {
        name: "菜鸟教程",
        url: "www.runoob"
    };
    dbo.collection("site").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        db.close();
    });
});