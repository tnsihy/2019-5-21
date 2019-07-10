var express = require('express');
var app = express();
var fs = require('fs');

var id = 2;
app.get('/deleteUser',function(req,res){
    // First read existing users.
    fs.readFile(__dirname + '/' + 'users.json','utf-8',function(err,data){
        if(err){
            return console.log(err);
        }
        data = JSON.parse(data);
        delete data["user" + id];

        console.log(data);
        res.write(JSON.stringify(data));
        res.end();
    })
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
  })