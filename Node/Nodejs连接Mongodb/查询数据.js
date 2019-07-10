//  find() 来查找数据, find() 可以返回匹配条件的所有数据
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// 查询指定条件的数据 查询指定条件 
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
     var whereStr = {"name":'菜鸟教程'};  // 查询条件
    // dbo.collection("site"). find({}).toArray(function(err, result) { // 返回集合中所有数据
    dbo.collection("site").find(whereStr).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});