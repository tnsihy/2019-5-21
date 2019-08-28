> WebSocket是HTML5新增协议。  
- 目的是在浏览器和服务器之间建立一个`不受限`的双向通信协议。  
- 比如：服务器可以在任意时刻发送消息给浏览器。  
- `任何一方都可以主动发送消息给对方`。

> 为什么传统的HTTP协议不能做到webSocket实现的功能
- 因为HTTP协议是一个请求 -响应协议
- 请求必须先由浏览器发给服务器，服务器才能响应这个请求，把数据发送给浏览器。
- 即浏览器不主动请求，服务器没法发送数据给浏览器。

> WebSocket
- 并不是全新的协议，而是利用HTTP协议来建立连接。
- `WebSocket连接必须由浏览器发起`，因为请求协议是一个标准的HTTP请求
- 格式如下：
```
GET ws://localhost:3000/ws/chat HTTP/1.1
Host:localhost
Upgrade:websocket
Connection:Upgrade
Origin:http://localhost:3000
Sec-WebSocket-Key:client-random-string
Sec-WebSocket-Version:13
```
- 该请求和普通的HTTP请求有几点不同：
  - GET请求的地址不是类似/path/，而是以ws://开头的地址；
  - 请求头Upgrade: websocket和Connection: Upgrade表示这个连接将要被`转换为WebSocket连接`；
  - Sec-WebSocket-Key是用于标识这个连接，并非用于加密数据；
  - Sec-WebSocket-Version指定了WebSocket的协议版本。

- 如果接受该请求，则返回如下响应：
```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: server-random-string
```
- 该响应代码`101表示本次连接的HTTP协议即将被更改`，更改后的协议就是Upgrade: websocket指定的WebSocket协议。
- `一个WebSocket连接就建立成功，浏览器和服务器就可以随时主动发送消息给对方。`

> WebSocket事件  var ws = new WebSocket();
- open `ws.onopen` 连接建立时触发
- message `ws.onmessage` 客户端接收服务端数据时触发
- error `ws.error` 通信发生错误时触发
- close `ws.close` 连接关闭时触发