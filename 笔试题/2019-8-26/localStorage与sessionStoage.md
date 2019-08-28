`https://blog.csdn.net/justlpf/article/details/82662365`
`https://segmentfault.com/a/1190000012057010`

webstorage是本地存储，存储在客户端，包括localStorage和sessionStorage。

`Cookie`
- 大小限制在4KB左右
- 主要用途：保存用户登录信息
- “记住密码”：通过在Cookie中存入一段辨别用户身份的数据  

`localStorage`  
`sessionStorage`  

`三者的异同`
特性 | Cookie | localStorage | sessionStorage
--- | --- | --- | ---
数据的生命期 | 一般由服务器生成，可设置失效时间。如果在浏览器端生成Cookie，默认是关闭浏览器后失效 | 除非被清除，否则永久保存 | 仅在当前会话下有效，关闭页面或浏览器后被清除
存放数据大小 | 4K左右 | 一般5MB | 一般5MB
与服务端通信 | 每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题 | 仅在客户端（即浏览器）中保存，不参与和服务器的通信 | 仅在客户端（即浏览器）中保存，不参与和服务器的通信
易用性 | 需要程序员自己封装，原生cookie接口不友好 | 原生接口可以接受 | 原生接口可以接受
应用场景 | 判断当前用户是否登录 | 管理购物车/产生本地数据 | 表单多个子页面，按步骤引导用户填写

`安全性考虑`  
需要注意的是，不是什么数据都适合放在 Cookie、localStorage 和 sessionStorage 中的。使用它们的时候，需要时刻注意是否有代码存在 XSS 注入的风险。因为只要打开控制台，你就随意修改它们的值，也就是说如果你的网站中有 XSS 的风险，它们就能对你的 localStorage 肆意妄为。所以千万不要用它们存储你系统中的敏感数据。

`localStorage与sessionStorage操作`  
`setItem` 将value存储到key字段
- localStorage.setItem('key','value');
- sessionStorage.setItem('key','value');

`getItem` 获取指定key本地存储的值
- localStorage.getItem('key');
- sessionStorage.getItem('key');
  
`removeItem` 删除指定key本地存储的值
- localStorage.removeItem('key');
- sessionStorage.removeItem('key');

`clear` 删除所有key/value
- localStorage.clear();
- sessionStroage.clear();

`.或者[]` 存储
- var storage = window.localStorage(或者sessionStorage);
- storage.key1 = 'Hello';
- storage["key2"] = 'world';

`key或者length` 实现数据遍历
- var storage = window.localStorage(或者sessionStorage);
- for(var i = 0, len < storage.length; i < len; i++)
- {
  - var key = storage.key(i);
  - var value = storage.getItem(key);
  - console.log(key + "=" + value); 
- }
