var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: './tmp/'}).array('image'));

app.get('/File.html',function(request,response){
    response.sendFile(__dirname + '/' + 'File.html');
})

app.post('/file_upload',function(request,response){
    // 上传的文件信息
    console.log(request.files[0]);
    var des_file = __dirname + '/' + request.files[0].originalname;
    fs.readFile( request.files[0].path, function (err, data) {
        fs.writeFile(des_file,data,function(err){
            if(err){
                console.log(err);
            }else{
                res = {
                    message:'File uploaded successfully',
                    filename:request.files[0].originalname
                }
            }
            console.log(res);
            response.end(JSON.stringify(res));
        })
    })
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
  })