/**
 * 实现一个once函数，传入函数参数只执行一次
 * function fn(){
 *  console.log("XXX");
 * }
 * function once(fn){
 * 
 * }
 * once(fn); // XXX
 * once(fn); // 没了
 */
function test(){
    console.log('Hello');
}

var once = function(fn){
    var flag = true;
    return function(){
        if(flag){
            flag = !flag;
            fn();
        }
    };
};

var b = once(test); //return了一个函数
b(); // flag = true
b(); // 由于上边把flag设置为false，故不会执行fn();

// -------------------------------------------------
