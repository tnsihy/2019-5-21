// 引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件

// 引入events模块
var events = require('events');
// 创建eventEmitter对象
var eventEmitter = new events.EventEmitter();
// 绑定事件程序
eventEmitter.on('eventName',eventHandler)
// 触发事件
eventEmitter.emit('eventName');