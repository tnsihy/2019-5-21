> this是在函数被调用时发生绑定的，它指向什么完全取决于函数在哪里被调用。
> 也就是说，this的指向不是函数被创建时绑定，而是被什么样的方式调用时绑定。

> `默认绑定 this被默认绑定到window对象`
```
var a = 'window';

// 一次调用
function show(){
    console.log(this);
    console.log(this.a);
};
show();

// 二次调用
function show2(){
    show();
}
show2();

结果输出:
Window
 a:"window"
 ...(很多)
window
Window
 a:"window"
 ...(很多)
window
```

> `隐式绑定`
> 1.对象隐式绑定
```
var name = 'window';
function show(){
    console.log(this);
    console.log(this.name);
}

var obj = {
    name : 'obj',
    show:show   // 对show方法进行引用
}

obj.show();

结果输出：
{ name: 'obj', show: f }
obj
```
虽然show()函数是在全局被创建的，但被obj.show方法引用了。这时调用obj.show()方法，this绑定给了obj对象。

> 2.DOM对象隐式绑定 
```
var name = 'window';
function show(){
    console.log(this);
    console.log(this.name);
}

// 这里给oBtn对象添加一个name属性
document.documentElement.name = "DOM";
document.documentElement.onclick = show;

结果输出：
<html>...</html>
DOM
```
当给oBtn添加点击事件的时候，show()函数中的this被指向了oBtn(DOM)对象。

> `显示绑定`  
```
var name = 'window';
function show(){
    console.log(this);
    console.log(this.name);
}

var obj = {
    name:'obj'
}

show.apply(obj);
show.call(obj);
show.bind(obj)();

结果输出：
{name:'obj'}
obj
{name:'obj'}
obj
{name:'obj'}
obj
```

> `new绑定`
```
var name = "window";
function show(){
    console.log(this);
    console.log(this.name);
}

// 创建一个构造函数
function Fn(name){
    this.name = name;
    this.show = show;
}

// 创建一个实例对象
var demo = new Fn('tnsihy');
demo.show();

结果输出：
Fn{name:'tnsihy',show:f}
tnsihy
```