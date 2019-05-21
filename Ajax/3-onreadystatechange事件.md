当发送一个请求后，客户端需要确定这个请求什么时候结束。  
因此，XMLHttpRequest对象提供了onreadystatechange事件机制来捕获请求的状态，继而实现响应。  

每当readyState改变时，会触发onreadystatechange事件。  
readyState属性存有XMLHttpRequest的状态信息。

readyState状态说明  
状态 | 说明 | 详细说明
--- | --- |---
0 | 请求未初始化 | 确认XMLHttpRequest对象是否创建，并为调用open()方法进行未初始化做好准备，值为0表示对象已经存在，否则浏览器会报错：对象不存在
1 | 服务器连接已建立 | 对XMLHttpRequest对象进行初始化，即调用open()方法，根据参数(method,url,true)完成对象状态的设置。并调用send()方法开始向服务端发出请求。值为1表示正在发送请求。
2 | 请求已接收 | 接收服务器端的响应数据。但获得的还是服务端响应的原始数据，并不能直接在客户端使用。值为2表示已经接收完全部响应数据，并为下一个阶段对数据的解析做准备。
3 | 请求处理中 | 接收到的服务器端的响应数据转换成能通过responsebdy、responseText、responseXML的属性存取的格式，为在客户端调用做好准备。
4 | 请求已完成，且响应已就绪 | 已经解析为客户端可用的格式，解析已经完成。