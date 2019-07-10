/**
 * Nodejs全局对象是global 所有全局变量都是global对象的属性
 * 最好不要用var定义变量避免引入全局变量，因为全局变量会污染命名空间，提高代码的耦合
 */

// _filename 正在执行的脚本文件名 输出文件的绝对路径
console.log(__filename);

// _dirname 正在执行脚本的所在目录
console.log(__dirname);

// setTimeout(cb,ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb) setTimeout只执行一次指定函数
function printHello(){
    console.log('Hello world');
};
setTimeout(printHello,1000);

// clearTimeout(t) 全局函数用于停止一个之前通过setTimeout()创建的定时器  参数t是通过setTimeout()函数创建的定时器。
function printHi(){
    console.log('Hi');
};
var t = setTimeout(printHi,2000);
clearTimeout(t);

// setInterval(cb,ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb) 不停的调用函数，直到clearInterval()被调用或窗口关闭
function sayHello(){
    console.log('Hello');
}
// setInterval(sayHello,1000);

/**
 * console.log() 向标准输出流打印字符并以换行符结束
 * console.info() 返回信息性消息
 * console.error() 输出错误信息
 * console.warn() 输出警告信息
 * console.dir() 用来对一个对象进行检查
 * console.time() 输出时间 表示计时开始
 * console.timeEnd() 结束时间 表示计时结束
 * console.trace() 当前执行的代码在堆栈中的调用路径
 * console.assert()
 * 用于判断某个表达式或变量是否为真，接收两个参数，第一个参数是表达式，第二个参数是字符串。只有当第一个参数为false，才会输出第二个参数，否则不会有任何结果。
 */

// process 描述进程状态的对象
// exit 当进程退出时触发
process.on('exit',function(code){
    // 永远不执行
    setTimeout(function(){
        console.log('该代码不会执行');
    },0)
    console.log('退出码为：',code);
});
console.log('程序执行结束');


// 输出到终端
process.stdout.write("Hello World!" + "\n");
// 通过参数读取
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});
// 获取执行路径
console.log(process.execPath); // C:\Program Files\nodejs\node.exe
// 平台信息
console.log(process.platform); // win32

