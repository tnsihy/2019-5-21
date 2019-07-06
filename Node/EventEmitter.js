var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('some_event',function(){
    console.log("some_event事件触发");
})
setTimeout(function(){
    eventEmitter.emit('some_event');
},1000)


// 对于每个事件，EventEmitter 支持 若干个事件监听器。
// 以下例子 emitter 为事件 someEvent 注册了两个事件监听器，然后触发了 someEvent 事件。
var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('someEvent',function(arg1,arg2){
    console.log('listen1',arg1,arg2);
})
eventEmitter.on('someEvent',function(arg1,arg2){
    console.log('listen2',arg1,arg2);
})
eventEmitter.emit('someEvent','jgchen','tnsihy');


// eventEmitter属性介绍
var events = require('events');
var eventEmitter = new events.EventEmitter();

// 监听器listen1
var listen1 = function listen1(){
    console.log('监听器listen1执行');
}
// 监听器listen2
var listen2 = function listen2(){
    console.log('监听器listen2执行');
}
// addListener(event, listener)为指定事件添加一个监听器到监听器数组的尾部
eventEmitter.addListener('connection',listen1);
// on绑定事件
eventEmitter.on('connection',listen2);

// 返回指定事件的监听器数量
var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + '个监听器监听连接事件');

// 触发
eventEmitter.emit('connection');
// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection',listen1);
console.log('listen1 不再受监听');

// 触发
eventEmitter.emit('connection');
eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + '个监听器监听连接事件');
console.log('程序结束');

// error事件
var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.emit('error');
