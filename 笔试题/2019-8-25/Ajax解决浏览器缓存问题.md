Ajax解决浏览器缓存问题  
只要没有刷新页面，数据一直被缓存在内存中。  
当提交的问题URL与历史URL一致时，不会从服务器上获取数据，而是直接利用缓存数据。  

1.在ajax发送请求前加上：`anyAjaxObj.setRequestHeader('If-Modified-Since','0')`  
2.在ajax发送请求前加上：`anyAjaxObj.setRequestHeader('Cache-Control','no-cache')`  
3.在URL后面加一个随机数：`'fresh = ' + Math.random();`  
4.在URL后面加上时间戳：`'nowtime = ' + new Date().getTime();`  
5.使用jQuery，`$.ajaxSetup({cache:false})`  
