`get请求传参长度的误区`  
需要注意以下几点：  
- HTTP协议`未规定`GET/POST的长度限制
- GET的最大长度显示是因为`浏览器或者web服务器限制了URI的长度`
- 不同的浏览器或者web服务器，限制的最大长度不同。

`URL与URI的区别`  
- `URI`包括`URL`和`URN`
  - URI UR Identifier 统一资源`标识`符 可以唯一
  - URL UR locator 统一资源定位符
  - URN UR Name 统一资源名称
- URL是URI的子集，所以URL一定是URI，但URI不一定是URL

`get和post请求在缓存方面的区别`
- get请求类似于查找的过程，用户获取数据，可以不用每次与数据库连接，可以使用缓存。
- post请求一般是修改和删除的工作，必须与数据库交互，不能使用缓存。
- get适用于请求缓存。

`get和post请求的区别`
- get会被缓存，而post不会缓存
- post与get更安全
- 请求参数长度的限制 post没有限制
