var express = require('express');
var app = express();
var fs = require('fs');

// 添加的新用户数据
var user = {
    "user4":{
        "name":"liuwenjun",
        "password":"liuwenjun",
        "process":"student",
        "id":4
    }
}

app.get('/addUser',function(req,res){
    // 读取已存在的数据
    fs.readFile(__dirname + '/' + 'users.json','utf-8',function(err,data){
        if(err){
            return console.log(err);
        }
        // 将JSON转换为js对象
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        res.write(JSON.stringify(data));
        res.end();
    })
})

var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('应用实例，访问地址为：http://%s:%s',host,port);
})