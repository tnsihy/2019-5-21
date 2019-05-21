AJAX-创建XMLHttpRequest对象  
XMLHttpRequest缩写为XHR，解释为可扩展超文本传输请求  
XMLHttpRequest的对象用于客户端和服务器之间的异步通信  
XMLHttpRequest 用于在后台与服务器交换数据  

XMLHttpRequest对象的属性
 属性 | 描述 
---|---
onreadystatechange | 存储函数，每当readyState的属性改变时，就会调用该函数
readyState | 存有的XMLHttpRequest的状态从0到4发生变化 0：请求未初始化  1：服务器连接已建立  2：请求已接收  3：请求处理中  4：请求已完成，且响应已就绪  
responseText | 以文本形式返回响应
responseXML | 以XML形式返回响应
status | 将状态返回数字（例如"Not Found"为404，"OK"为200）
statusText | 以字符串形式返回状态（例如"Not Found","OK"）

XMLHttpRequest对象的方法  
方法 | 描述
--- | ---
abort() | 取消当前请求
getAllResponseHeaders() | 以字符串形式返回完整的HTTP标头集
getResponseHeader(headerName) | 返回指定HTTP标头的值
void open(method,URL) | 打开指定获取方法和URL请求
void open(method,URL,async) | 同上，但指定异步
void open(method,URL,async,userName,password) | 同上，但指定用户名和密码 
void send(content) | 发送获取请求
setRequestHeader(label,value) | 将标签/值对添加到要发送的HTTP标头

向服务器发送请求  
方法 | 描述
--- | ---
open(method,url,async) | method:请求的类型；GET或POST  url:文件在服务器上的位置  async:true异步 false同步
send(string) | string仅限于POST请求

何时使用POST请求? 何时使用GET请求?  

与POST相比，GET 更简单也更快，并且在大部分情况下都能用。  
然而，在以下情况中，请使用POST请求：
- 1.无法使用缓存文件（更新服务器上的文件或数据库）  
- 2.向服务器发送大量数据（POST没有数据量限制）  
- 3.发送包含未知字符的用户输入时，POST比GET更稳定也更可靠  

