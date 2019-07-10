/**
 * 异步与同步
 * 读取文件内容 (异步)fs.readFile() 与 (同步)fs.readFileSync()
 * 异步的方法函数最后一个参数是回调函数，回调函数的第一个参数包含错误信息
 */
// 异步
var fs = require('fs');
fs.readFile('input.txt', function (error, data) {
    if (error) {
        return console.log(error);
    }
    console.log('异步读取：' + data.toString());
})
// 同步
var data = fs.readFileSync('input.txt');
console.log('同步读取：' + data.toString());

console.log('程序执行完毕');

/**
 * 打开文件fs.open(path,flags[,mode],callback)
 * path - 文件的路径
 * flags - 文件打开的行为
 * mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)
 * callback - 回调函数，带有两个参数如：callback(err, fd)
 */
var fs = require('fs');
// 异步打开文件
console.log('准备打开文件!');
fs.open('input.txt', 'r+', function (err, data) {
    if (err) return console.log(err);
    console.log('文件打开成功！');
})

/**
 * 获取文件信息fs.stat(path,callback)
 * path - 文件路径
 * callback - 回调函数，带有两个参数如：(err, stats),stats是fs.Stats对象
 */
var fs = require('fs');
fs.stat('./server.js', function (err, stats) {
    console.log(stats.isFile()); // true
})

/**
 * 写入文件fs.writeFile(file,data[,options],callback) writeFile 直接打开文件默认是w模式
 * file - 文件名或文件描述符
 * data - 要写入文件的数据，可以是 String(字符串) 或 Buffer(缓冲) 对象
 * options - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'
 * callback - 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回
 */
var fs = require('fs');
console.log("准备写入文件");
fs.writeFile('input.txt', '我是通过fs.writeFile写入文件的内容', function (err, data) {
    if (err) {
        return console.log(err);
    }
    console.log('数据写入成功！');
    console.log("--------我是分割线-------------")
    console.log("读取写入的数据！");
    fs.readFile('input.txt', function (err, data) {
        if (err) {
            return console.log(err);
        }
        console.log('异步读取数据：' + data.toString());
    });
})

/**
 * fs.read(fd,buffer,offset,length,position,callback) 文件描述符来读取文件
 * fd - 通过 fs.open() 方法返回的文件描述符 ！！！
 * buffer - 数据写入的缓冲区
 * offset - 缓冲区写入的写入偏移量
 * length - 要从文件中读取的字节数
 * position - 文件读取的起始位置，如果 position的值为null，则会从当前文件指针的位置读取
 * callback - 回调函数，有三个参数err,bytesRead,buffer,err为错误信息，bytesRead表示读取的字节数，buffer为缓冲区对象
 */
var fs = require('fs');
var buf = Buffer.alloc(1024);
console.log('准备打开已存在的文件');
fs.open('input.txt', 'r+', function (err, fd) {
    if (err) {
        return console.log(err);
    }
    console.log("文件打开成功！");
    console.log("准备读取文件：");
    fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
        if (err) {
            console.log(err);
        }
        console.log(bytes + "字节被读取");

        // 仅输入读取的字节
        if(bytes > 0 ){
            console.log(buf.slice(0,bytes).toString());
        }
    })
})

/**
 * fs.close(fd,callback) 关闭文件
 * fd - 通过 fs.open() 方法返回的文件描述符
 * callback - 回调函数，没有参数。
 */
关闭文件
fs.close(fd,function(err){
    if(err){
        return console.log(err);
    }
    console.log('文件关闭成功！');
})

/**
 * 截取文件fs.ftruncate(fd,len,callback) 
 * fd - 通过 fs.open() 方法返回的文件描述符
 * len - 文件内容截取的长度
 * callback - 回调函数，没有参数
 */
var fs = require('fs');
var buf = Buffer.alloc(1024);

console.log('准备打开文件');
fs.open('input.txt','r+',function(err,fd){
    if(err){
        return console.log(err);
    }
    console.log('文件打开成功！');
    console.log('截取10字节内的文件内容，超出部分被除去');

    // 截取文件
    fs.ftruncate(fd,10,function(err){
        if(err){
            return console.log(err);
        }
        console.log('文件截取成功！');
        console.log('读取相同文件');
        fs.read(fd,buf,0,buf.length,0,function(err,bytes){
            if(err){
                return console.log(err);
            }
            // 仅输出读取的字节
            if(bytes > 0){
                console.log(buf.slice(0,bytes).toString());
            }
            // 关闭文件
            fs.close(fd,function(err){
                if(err){
                    return console.log(err);
                }
                console.log('文件关闭成功！');
            })
        })
    })
})

/**
 * 删除文件fs.unlink(path,callback)
 * path - 文件路径
 * callback - 回调函数，没有参数
 */
var fs = require('fs');
console.log('准备删除文件');
fs.unlink('input.txt',function(err){
    if(err){
        return console.log(err);
    }
    console.log('文件删除成功！');
})

/**
 * 创建目录fs.mkdir(path[,option],callback)
 * path - 文件路径
 * options 参数可以是：
 *     recursive - 是否以递归的方式创建目录，默认为 false
 *     mode - 设置目录权限，默认为 0777
 * callback - 回调函数，没有参数
 */
var fs = require('fs');
console.log('创建目录 /fsMkdir/test/')
fs.mkdir('./fsMkdir/test/',{recursive:true},function(err){
    if(err){
        return console.log(err);
    }
    console.log('目录创建成功！');
})

/**
 * 读取目录
 * fs.readdir(path,callback)
 * callback - 回调函数，回调函数带有两个参数err,files,err为错误信息，files为目录下的文件数组列表
 */
var fs = require('fs');
fs.readdir('./fsMkdir/',function(err,files){
    if(err){
        return console.log(err);
    }
    files.forEach(function(file){
        console.log(file);
    })
})

/**
 * 删除目录fs.rmdir(path,callback)
 */
var fs = require('fs');
// 执行前创建一个空的 /tmp/test 目录
console.log('准备删除目录 tmp');
fs.rmdir('./tmp/',function(err){
    if(err){
        return console.log(err);
    }
    console.log('读取 /tmp 目录');
    fs.readdir('./tmp/',function(err,files){
        if(err){
            return console.log(err);
        }
        files.forEach(function(file){
            console.log(file);
        })
    })
})