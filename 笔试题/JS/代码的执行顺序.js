setTimeout(function () {
    console.log(1);
}, 0);

new Promise(function (resolve, reject) {
    console.log(2);
    resolve();
}).then(function () {
    console.log(3);
}).then(function () {
    console.log(4);
})

process.nextTick(function () {
    console.log(5);
})

console.log(6);

// 结果是 2 6 5 3 4 1 

/**
 * process.nextTick 是Node的一个定时器，可让任务在指定时间执行。
 * 所有异步任务里边最快执行的。
 * Node执行完所有同步任务，接下来就会执行process.nextTick的任务队列。
 * 如果你希望异步任务尽可能快地执行，那就使用process.nextTick。
 */