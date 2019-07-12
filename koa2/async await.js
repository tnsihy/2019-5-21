/**
 * async 声明方法是异步
 * await等待异步方法完成
 * await要在async方法中才可以使用 await = async wait
 */

// 普通函数
function getSomething(){
    return 'something';
}

// 异步函数
 async function testAsync(){
    return 'Hello world!';
}

// await外边必须是一个异步的方法
async function test(){
    const v1 = await getSomething();
    const v2 = await testAsync();
    console.log(v1,v2);
}
test();

/*
const result = testAsync();
// 返回Promise对象
// 输出结果 Promise { 'Hello world!' }
console.log(result);
*/