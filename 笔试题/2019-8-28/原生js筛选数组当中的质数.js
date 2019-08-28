function findZ(arr) {
    // 用js的高阶函数filter把数组中不是素数的过滤掉
    return arr.filter((val) => {
        for (let i = 2; i < val; i++) {
            if(val % i === 0){
                // 除了1和本身还有其他因素的，则返回false
                return false;
            }
        }
        // 素数是正整数，而且1不是素数
        return val>1;
    })
}
var arr = [15, 19, 499, 2, 36, 401, 798, 3, 156, 819, 64];
findZ(arr);
console.log(findZ(arr));