参考https://blog.csdn.net/ih1107/article/details/79208860  
Object.assign 可以把 n 个源对象拷贝到目标对象中去，如下  
```JS
let m ={name: {asd: '123'}}
let n = Object.assign({}, m)
console.log(n)
```
运行结果：  
{name: {asd: '123'}}

那到底是深拷贝还是浅拷贝呢，`答案是第一级属性深拷贝，以后级别属性浅拷贝。`  
大家看下面两段代码:
例1：
```JS
let s ={name: {asd: '123'}}
let d = Object.assign({}, s)
d.name.asd = '123456789'
console.log(d, s);
```
运行结果：  
{name:{asd: "123456789"}} {name:{asd: "123456789"}}  

例2：
```JS
let o ={name: {asd: '123'}}
let p = Object.assign({}, o)
p.name = '123456789'
console.log(p, o);
```
运行结果：  
{name: "123456789"} {name: {asd: "123"}}