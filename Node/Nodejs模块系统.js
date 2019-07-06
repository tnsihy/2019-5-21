// 让Node.js的文件可以相互调用

/* 创建模块
var hello = require('./hello');
hello.world();
*/

var Hello = require('./hello');
// 注意！
hello = new Hello();
hello.setName('tnsihy');
hello.sayHello();
