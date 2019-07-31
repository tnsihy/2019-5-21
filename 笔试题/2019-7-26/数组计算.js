/**
 * 现有数组[5,2,0,1,3,1,4]， 请实现去重功能后完成升序排序，并考虑性能。
 * 输入：const array = [5, 2, 0, 1, 3, 1, 4];
 * 输出：[0,1,2,3,4,5]
 */

function demo() {
    const arr = [5, 2, 0, 1, 3, 1, 4];
    arr.sort();
    let result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            result.push(arr[i]);
        }
    }
    console.log(result);
}

demo();