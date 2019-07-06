/* Stream有四种流类型
Readable 可读操作
Writable 可写操作
Duplex 可读可写操作
Transform 操作被写入数据，然后读出结果

所有Stream对象都是EventEmitter的实例
data - 当有数据可读时触发
end - 当没有更多数据可读时触发
error - 在接收和写入过程中发生错误时触发
finish - 所有数据已被写入到底层系统时触发
*/

/* 从流中读取数据
*/
var fs = require('fs');
var data = '';
// 创建可读流
var readerStream = fs.createReadStream('input.txt');
// 设置编码为utf8
readerStream.setEncoding('UTF8');
// 处理流事件 --> data end error
readerStream.on('data',function(chunk){
    data += chunk;
})
readerStream.on('end',function(){
    console.log(data);
})
readerStream.on('error',function(err){
    console.log(err.stack);
})
console.log('程序执行完毕1');

/* 写入流
*/
var fs = require('fs');
var data = 'tnsihy';
// 创建一个可以写入的流
var writerStream = fs.createWriteStream('output.txt');
// 使用 utf8 编码写入数据
writerStream.write(data,'UTF8');
// 标记文件末尾
writerStream.end();
// 处理事件流
writerStream.on('finish',function(){
    console.log('写入完成');
})
writerStream.on('error', function(err){
    console.log(err.stack);
});
console.log('程序执行完毕2');

/* 管道流pipe
*/
var fs = require('fs');
var rStream = fs.createReadStream('input.txt');
var wStream = fs.createWriteStream('output.txt');
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
rStream.pipe(wStream);

/* 链式流 用管道和链式来解压和压缩文件
*/
var fs = require('fs');
// node内置模块zlib 压缩
var zlib = require('zlib');
// 压缩input1.txt 文件为input1.txt.gz
fs.createReadStream('input1.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input1.txt.gz'));
console.log("文件压缩完成");

/* 解压
var fs = require('fs');
var zlib = require('zlib');
fs.createReadStream('input1.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('input1.txt'));
console.log("文件解压完成");
*/


