var express = require('express');
var app = express();
var fs = require('fs');

app.get('/:id',function(req,res){
    // 首先先读取已存在的用户数据
    fs.readFile(__dirname + '/' + 'users.json','utf-8',function(err,data){
        if(err){
            return console.log(err);
        }
        data = JSON.parse(data);
        var user = data["user" + req.params.id];
        console.log(user);
        res.write(JSON.stringify(user));
        res.end();
    })
})
var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('应用实例，访问地址为：http://%s/%s',host,port);
})