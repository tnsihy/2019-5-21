// Node.js 文件系统封装在 fs 模块中，它提供了文件的读取、写入、更名、删除、遍历目录、链接等POSIX 文件系统操作。
// 阻塞代码
var fs = require('fs');
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("程序结束");


// 非阻塞代码（异步）
var fs = require('fs');
fs.readFile('input.txt',function(err,data){
    if(err) return console.log(err);
    console.log(data.toString());
})
console.log("程序结束");
