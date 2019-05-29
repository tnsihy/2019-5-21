 let z = 1
 console.log('ES6最基本语法' + z)

 // -----------2.三种变量声明----------------
 //  for (var i = 0; i < 10; i++) {
 //      console.log("循环体内" + i);
 //  }
 //  console.log("循环体外" + i)

 //  for (let j = 0; j < 10; j++) {
 //      console.log("循环体内" + j)
 //  }
 // console.log("循环体外" + j)  报错！

 // -----------3.变量的解构赋值---------------
 // 3-1 数组的解构赋值
 //  let a = 0
 //  let b = 1
 //  let c = 2
 let [a, b, c] = [0, 1, 2]
 console.log(a)
 console.log(b)
 console.log(c)
 // 默认值
 let [foo = true] = []
 let [d, e = "jgchen"] = ["tnsihy"]
 console.log('默认值：' + d + e)

 // 3-2 对象的解构赋值
 let {
     fool,
     bar
 } = {
     fool: 'tnsihy',
     bar: 'jgchen'
 }
 console.log('对象的解构赋值' + fool + bar)

 // 如果在解构之前就定义了变量，这时候你再解构会出现问题 解决方式如下
 let demo;
 ({
     demo
 } = {
     demo: '1'
 });
 console.log('加括号避坑：' + demo);

 // 3-3 字符串解构赋值
 const [f, g, h, i, j, k] = 'tnsihy'
 console.log(f)
 console.log(g)
 console.log(h)
 console.log(i)
 console.log(j)
 console.log(k)

 // -----------4.扩展运算符和rest运算符---------------
 // 4-1 扩展运算符  不知道传进来的参数有多少个
 function tnsihy(...arg) {
     console.log(arg[0]);
     console.log(arg[1]);
     console.log(arg[2]);
     console.log(arg[3]);
 }
 tnsihy(1, 2, 3);

 // let arr1 = ['www','baidu','com'];
 // let arr2 = arr1;
 // console.log(arr2); // 结果是['www','baidu','com']
 // arr2.push('jgchen')
 // console.log(arr1); // 结果是['www','baidu','com','jgchen'] 但不是我们想要的结果
 // 解决如下:
 let arr1 = ['www', 'baidu', 'com'];
 let arr2 = [...arr1];
 console.log(arr2);
 arr2.push('jgchen');
 console.log(arr2); // 结果是['www','baidu','com','jgchen']
 console.log(arr1); // 结果是['www','baidu,'com']

 // 4-2 rest(剩余)运算符
 function tnsihy(first, ...arg) {
     console.log('rest(剩余)运算符' + arg.length);
     // 想要输出剩余的数组中的元素 for of循环
     for (let val of arg) {
         console.log(val)
     }
 }
 tnsihy(0, 1, 2, 3, 4, 5, 6, 7);

 // ----------------5.字符串模板--------------------
 let jspang = "技术胖";
 let blog = "非常高兴你能看到这篇文章，我是你的老朋友" + jspang + "。这节课我们学习字符串模板。";
 let newBlog = `<br/>非常高兴你能看到这篇文章，<b>我是你的老朋友</b>${jspang}。这节课我们学习字符串模板。`
 document.write(blog);
 document.write('改进版ES6：' + newBlog);

 // 判断技术胖（jsang变量值）存不存在（blog变量值）里边
 document.write('indexOf()：' + blog.indexOf(jspang) > 0); // 结果为true
 // ES6
 document.write('includes()：' + blog.includes(jspang)) //直接判断true或者false
 // 查找开头有没有 结尾有没有
 document.write('startsWith():' + blog.startsWith("非常")); //结果返回true
 document.write('endsWith()' + blog.endsWith("老朋友")); //结果返回false

 // 支持一般的运算
 let l = 1;
 let m = 2;
 let result = `${l+m}`;
 document.write('支持运算：' + result);

 // 复制字符串
 document.write('复制字符串' + 'jspang|'.repeat(3)); //输出jspang|jspang|jspang|

 // --------------6.数字操作------------------
 // 6-1 二进制数字 Binary
 let binary = 0B010101;
 console.log('二进制数字' + binary); // 21
 // 6-2 八进制数字 Octal
 let octal = 0o666;
 console.log('八进制数字' + octal); // 438
 // 数字判断
 // isFinite() 函数用于检查其参数是否是无穷大。如果 number 是有限数字（或可转换为有限数字），那么返回 true。否则，如果 number 是 NaN（非数字），或者是正、负无穷大的数，则返回 false。
 let demo2 = 11 / 4;
 console.log('isFinite():' + Number.isFinite(demo2)); // true
 // 下边三种是false
 console.log(Number.isFinite('jspang'))
 console.log(Number.isFinite(NaN));
 console.log(Number.isFinite(undefined))

 console.log('isNaN' + Number.isNaN(1))
 console.log(Number.isInteger(244)) // 判断是否为整数
 console.log(Number.parseFloat()) // 转换
 console.log(Number.parseInt())

 // 整数取值范围
 let demo3 = Math.pow(2, 53) - 1; //整数的操作是有一个取值范围的，它的取值范围就是2的53次方
 console.log(demo3);
 console.log('最大安全整数' + Number.MAX_SAFE_INTEGER); // 打印最大安全整数
 console.log('最小安全整数' + Number.MIN_SAFE_INTEGER); // 打印最小安全整数 当超过最大值或者最小值时最好转换为字符串显示，避免报错
 console.log(Number.isSafeInteger(demo3)); //判断是否安全整数 返回true

 // --------------7.数组操作-1----------------
 //json数组格式
 let json = {
     '0': 'tnsihy',
     '1': 'jgchen',
     '2': '小君君',
     length: 3
 }
 // 第一种方法：json转换为数组Array.from()
 let arr3 = Array.from(json);
 console.log(arr3);
 // 第二种方法：一堆字符串转换为数组Array.of()
 let arr4 = Array.of('tnsihy', 'jgchen', '小君君');
 console.log(arr4);
 // 第三种方法：（查找符合条件的数组元素）find()实例方法
 let arr5 = ['tnsihy', 'jgchen', '小君君'];
 console.log(arr5.find(function (value, index, arr5) {
     return value == 'jgchen'; //输出jspang 若查找不到则返回undefined
 }));

 // --------------8.数组操作-2--------------
 // 1.Array.fill(value,start,end)填充替换  value填充值 start填充起始位置，可省 end填充结束位置，可省，实际结束位置是end-1
 let arr6 = ['tnsihy', 'jgchen', '小君君'];
 arr6.fill('web', 1, 2); //结果为['tnsihy','web','小君君']
 console.log(arr6);
 // 2.数组循环for of
 for (let item of arr6) {
     console.log(item);
 }
 // 如何输出的是下标 keys()
 for (let itemIndex of arr6.keys()) {
     console.log(itemIndex);
 }
 // 如何一起输出下标和value值 entries()
 for (let [index, value] of arr6.entries()) {
     console.log(index + ':' + value);
 }
 // 2.entries()实例方法
 let arr7 = ['tnsihy', 'jgchen', '小君君'];
 let list = arr7.entries();
 console.log(list.next().value); //[0,"tnsihy"]
 console.log(list.next().value);
 console.log(list.next().value);
 console.log(list.next().value); // undefined

 // ----------------9.箭头函数和扩展----------------------
 function addDemo1(a, b) {
     return a + b;
 }
 console.log(addDemo1(1, 2)) // 3

 function addDemo2(a, b = 1) {
     return a + b;
 }
 console.log(addDemo2(1)) //2

 // 主动抛出异常
 function addDemo3(a, b) {
     if (a == 0) {
         throw new Error('A is Error');
     }
     return a + b;
 }
 // console.log(addDemo3(0,1));  //即抛出错误

 // function addDemo4(a,b=1){
 //     return a + b;
 // }
 // console.log(addDemo4.length); //.length表示该函数必须传递的参数个数 因为b已定义值，故addDemo4.length = 1;

 // 箭头函数
 var addDemo4 = (a, b = 1) => {
     console.log('tnsihy');
     return a + b;
 }
 console.log('箭头函数:' + addDemo4(1));

 // ---------------10.ES6中的函数和数组补漏---------------------
 let jsonDemo = {
     a: 'jspang',
     b: '技术胖'
 }

 function fun({
     a,
     b = 'web'
 }) {
     console.log(a, b);
 }
 fun(jsonDemo);

 // 数组解构
 let arr8 = ['tnsihy', 'jgchen', '小君君'];

 function fun(a, b, c) {
     console.log(a, b, c); //输出tnsihy jgchen 小君君
 }
 fun(...arr8);

 // 对象判断有没有值  用in
 console.log('a' in jsonDemo); // true
 console.log('c' in jsonDemo); // false
 // 数组 in用法
 let arr9 = ['tnsihy', , , ];
 console.log(0 in arr9); //返回true
 console.log(1 in arr9); //返回false

 // 遍历数组的方法
 // 1.forEach
 let arr10 = ['jgpang', '技术胖', '前端视频'];
 arr10.forEach((value, index) => {
     console.log(index, value);
 })
 // 2.filter
 arr10.filter((value, index) => {
     console.log(index, value);
 })
 // 3.some
 arr10.some((value, index) => {
     console.log(index, value);
 })
 // 3.map
 arr10.map((value, index) => {
     console.log(index, value);
 })
 // 也可以替换
 console.log(arr10.map(x => 'web')); //结果为['web','web','web']

 // 转换为字符串
 console.log('转换为字符串:' + arr10.toString());
 console.log(arr10.join('|'));

 // --------------11.ES6中对象------------------
 let name = 'tnsihy'
 let skill = 'Web技术'
 let objDemo1 = {name,skill};
 console.log(objDemo1); // {name:'tnsihy',skill:'Web技术'}

//  key值的构建
let key = "skill";
let objDemo2 = {
    [key]:'Web技术'
}
console.log(objDemo2);

// 自定义对象方法
let objDemo3 = {
    add : function(a,b){
        return a + b; 
    }
}
console.log(objDemo3.add(1,2));

// 两个对象进行比较  ===同值相等 is严格相等
console.log(Object.is(0,1)); 

console.log(+0 === -0); //返回true
console.log(NaN === NaN); //返回false
console.log(Object.is(+0,-0)); //返回false
console.log(Object.is(NaN,NaN)); //返回true

// assign 合并对象
let objDemo4 = {a:'tnsihy'};
let objDemo5 = {b:'jgchen'};
let objDemo6 = {c:'小君君'};
let n = Object.assign(objDemo4,objDemo5,objDemo6);
console.log(n);

// ---------------12.Symbol(数据类型)在对象中的作用-------------------
// 以前学过的数据类型
// let a = new String;
// let b = new Boolean;
// let c = new Number;
// let d = new Array;
// let e = new Object;

let o = Symbol();
console.log(typeof(o)); 
let symDemo1 = Symbol('小君君');
console.log(symDemo1);
console.log(symDemo1.toString());
// Symbol在对象中的应用 --->key值的构建
let symDemo2 = Symbol();
let objDemo7 = {
    [symDemo2] : 'Web技术'
}
console.log(objDemo7[symDemo2]);
objDemo7[symDemo2] = 'javaScript技术';
console.log(objDemo7[symDemo2]);
// 循环输出对某个对象进行保护(例如对年龄age进行保护)

// 1.不保护的情况
let objDemo8 = {name:'小君君',skill:'Vue',age:18};
for(let item in objDemo8){
    console.log(objDemo8[item]);
}
// 2.保护的情况
let objDemo9 = {name:'小君君',skill:'Vue'}
let age = Symbol();
objDemo9[age] = 18;
console.log(objDemo9); //{name: "小君君", skill: "Vue", Symbol(): 18}
for(let item in objDemo9){
    console.log(objDemo9[item]); //对age=18进行隐藏
}
console.log(objDemo9[age]);  //输出18

// ----------13.Set和WeakSet数据结构-------------------
// Set的数据结构是以数组的形式构建的--->Set的增删查
let setArr = new Set(['tnsihy','jgchen','小君君']);

// 为数组添加新的元素 setArr.push()失败！
setArr.add('前端职场');  //setArr.add()成功！ 若是追加相同的值，则不管用
console.log(setArr); //返回Set(4) {"tnsihy", "jgchen", "小君君", "前端职场"}
// 查找
console.log(setArr.has('tnsihy'))  //返回true
// 删除某个
setArr.delete('tnsihy');
console.log(setArr);
// 删除全部
setArr.clear();
console.log(setArr);
// 循环输出
let setArrDemo = new Set(['tnsihy','jgchen','小君君']);
// 第1种
for(let item of setArrDemo){
    console.log('for...of:' + item);
}
// 第2种
setArrDemo.forEach((value) =>{
    console.log('forEach:' + value);
})
// size返回大小，自动去重
console.log(setArrDemo.size);  // 3

// WeakSet
let weakObj = new WeakSet();

let obj = {name:'tnsihy',sex:'女'};
let obj1 = {name:'tnsihy',sex:'女'}
weakObj.add(obj); 
weakObj.add(obj1); 
console.log(weakObj); // 当内存空间不相同的话 是可以重复的

// 若是let obj1 = obj,指向的内存相同则不能重复

// --------------13.map数据结构----------------
let jsonDemo1 = {
    name:'tnsihy',
    skill:'Web'
};
console.log(jsonDemo1.name);
// 声明map“->” 一个key值一个value值
var map = new Map();
map.set(json,"iam"); //json作为key值,"iam"是value值
console.log(map);
map.set('jgchen',json); //用set增加
console.log(map);

// map增删查
console.log(map.get(json));  //取值，返回iam
console.log(map.get('jgchen'));  //{0: "tnsihy", 1: "jgchen", 2: "小君君", length: 3}
// size长度
console.log(map.size); // 2
// 查找
console.log(map.has('jgchen'));  //true
map.delete(json);
// 删除某个
console.log(map);
// 删除全部
map.clear();
console.log(map);

// ----------------15.用Proxy（代理）进行预处理---------------------
//  Proxy在ES6当中是一种增强 对象和函数（方法）生命周期 钩子函数 预处理
let pro = new Proxy({
    add:function(value){
        return value + 100
    },
    name:'I am tnsihy'
},{
    // get set apply
    get:function(target,key,property){
        console.log('come in Get')  //进入了预处理机制
        // console.log(target); //{add: ƒ, name: "I am tnsihy"}
        // console.log(key); //name
        // console.log(property); //Proxy {add: ƒ, name: "I am tnsihy"}
        return target[key];
    },
    set:function(target,key,value,receiver){ //value要改变的值 receiver原始值
        console.log(`setting ${key} = ${value}`); //输出setting name = 技术胖
        return target[key] = value //必须将改变的结果进行返回
    }
});
console.log(pro.name); //输出I am tnsihy;若没有return target[key]则输出undefined
pro.name = '技术胖';
console.log(pro.name); //输出 '技术胖'

//apply
let target = function(){
    return 'My name is tnsihy'
}
// 对方法的预处理
let handler = {
    apply(target,ctx,args){
        console.log('DO APPLY');
        console.log(target); //ƒ target() {return 'My name is tnsihy';}
        return Reflect.apply(...arguments)  //?
    }
}
let proDemo = new Proxy(target,handler);
console.log(proDemo.apply())

// -----------------16.promise（承诺）对象的使用---------------------------
// 解决了ES5中回调地狱问题
let state = 1;
function step1(resolve,reject){
    console.log('1.开始-洗菜做饭')
    if(state == 1){
        resolve('洗菜做饭-完成')
    }else{
        reject('洗菜做饭-出错')
    }
}
function step2(resolve,reject){
    console.log('2.开始-坐下来吃饭')
    // state = 0会出错
    if(state == 1){
        resolve('坐下来吃饭-完成')
    }else{
        reject('坐下来吃饭-出错')
    }
}
function step3(resolve,reject){
    console.log('3.开始-收拾桌子洗碗')
    if(state == 1){
        resolve('收拾桌子洗碗-完成')
    }else{
        reject('收拾桌子洗碗-出错')
    }
}
new Promise(step1).then(function(value){
    console.log(value);
    return new Promise(step2);
}).then(function(value){
    console.log(value);
    return new Promise(step3);
}).then(function(value){
    console.log(value);
})
/*
1.开始-洗菜做饭
洗菜做饭-完成
2.开始-坐下来吃饭
坐下来吃饭-完成
3.开始-收拾桌子洗碗
收拾桌子洗碗-完成
*/

// ------------------17.class类的使用(类的多方法声明)----------------------
class Coder{
    name(value){
        console.log(value);
        return value;
    }
    // 在class中不用写逗号
    skill(value){
        console.log(this.name('小君君') + ':' + 'Skill-' + value);
    }
    // 类的传参
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    add(){
        return this.a + this.b;
    }
}
let coderDemo = new Coder;
coderDemo.name('小君君');
coderDemo.skill('web');

// 利用constructor传参
let coderDemo1 = new Coder(1,2);
console.log(coderDemo1.add());  //返回3

// 继承?
class htmler extends Coder{

}
let htmlerDemo = new htmler;
htmlerDemo.name('我是小君君');

// --------------18.模块化操作-------------------
// export输出  import引入
// // 写在src/temp.js
// import {nameDemo} from './temp';
// console.log(nameDemo);
// // 引入方式为花括号
// import {nameDemo,Boy,skill} from './temp'
// // export default引入方式 sky可以随便起名字 不需要知道temp.js中具体是什么
// import sky from './temp'