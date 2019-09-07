//ES5中的arguments 可以不传参
function func(){
    console.log(arguments[0],arguments[1],arguments[2]);
}

func(1,2,3);

// 使用箭头函数获取arguments
let func2 = (...rest)=>{
    console.log(rest);
}

func2(1,2,3);

// 每个函数都有一个arguments对象，它是这个函数所有参数的集合，它是一个数组。