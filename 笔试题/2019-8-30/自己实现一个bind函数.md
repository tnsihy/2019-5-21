`bind的返回值是函数`
```
var obj = {
    name:'tnsihy'
};

function f(){
    console.log(this.name);
}

var run = f.bind(obj);
console.log(run); // f(){ console.log(this.name) }
run(); // tnsihy
```
bind方法`不会立即执行`，而是返回一个改变了上下文this后的函数。而原函数的this并没有被改变，依旧指向全局对象window。

`参数的使用`  
```
function func(a, b, c) {
    console.log(a, b, c);
}
var func1 = func.bind(null,'linxin');

func('A', 'B', 'C');            // A B C
func1('A', 'B', 'C');           // linxin A B
```

`自己实现一个bind函数`  即写一个通用的bind函数，当多处使用的时都可以直接调用。考原理。
```
var obj = {
    name:'tnsihy'
};

##########    这个就是自己实现的bind函数，通用。
function makeABind(fn,obj){
    return function(){
        fn.call(obj,arguments);
    }
}
################################

function f(){
    console.log(this.name);
}

fucntion foo(){
    console.log(this);
    this.age=111;
}

var run = makeABind(f,obj);

var run1= makeAbind(foo,obj);

run();
```