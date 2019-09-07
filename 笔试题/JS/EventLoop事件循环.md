参考：https://www.cnblogs.com/hanzhecheng/p/9046144.html

> Event Loop是什么?

JavaScript的事件分两种，`宏任务`和`微任务`。  
宏任务：包括整体代码script setTimeout setInterval  
微任务：Promise.then() process.nextTick()  

事件的执行顺序：`先执行宏任务，然后执行微任务`。  
任务可以有同步任务和异步任务。  

我的理解：  
- 同步任务立即执行，
- 异步任务根据回调函数的宏任务还是微任务，加入到各自的Event Queue中，
- 执行完同步任务以后，去执行微任务，完成一轮循环，
- 然后开始第二轮勋魂，执行宏任务，
- 没有，循环结束。