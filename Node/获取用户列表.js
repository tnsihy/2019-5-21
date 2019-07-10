// 引入express
var express = require('express');
// 实例化express
var app = express();
var fs = require('fs');

app.get('/listUsers',function(req,res){
    fs.readFile(__dirname + '/' + 'users.json','utf-8',function(err,data){
        if(err){
            return console.log(err);
        }
        // console.log(data);
        res.write(data);
        res.end();
    });
})
var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('应用实例，访问地址为：http://%s:%s',host,port);
})